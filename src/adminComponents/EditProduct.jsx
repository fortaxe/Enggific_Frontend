import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateProduct } from '@/redux/productSlice';
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'react-toastify';
import CustomSpinner from "./CustomSpinner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  compositionConfig } from "./JoditConfig";
import JoditEditor from 'jodit-react';
import { supportedFormats } from "@/constant/constant";
import { compressImage } from "./CompressImage";
import { fetchCategories } from "@/redux/categorySlice";
import { fetchProductTypes } from "@/redux/productTypeSlice";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const EditProduct = ({ product, onSave }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categoryList);
    const { productTypes } = useSelector((state) => state.productTypeList);
    const [isUpdating, setIsUpdating] = useState(false);
    const fileInputRef = useRef(null);
    const imagePreviewRef = useRef(null);
    const compositionEditorRef = useRef(null);
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProductTypes());
    }, []);

    console.log('productTypes: ', productTypes);

    const formik = useFormik({
        initialValues: {
            id: product?._id || "",
            name: product?.name || "",
            composition: product?.composition || "",
            sku: product?.sku || "",
            category: product?.category || [],
            productTypeName: product?.productType?.name || "",
          
            thumbnailImage: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Product name is required"),
            composition: Yup.string().required("Composition is required"),
            sku: Yup.string().required("SKU is required"),
            category: Yup.array().min(1, "At least one category is required"),
            productTypeName: Yup.string().required("Product type is required"),
            thumbnailImage: Yup.mixed().nullable(),
        }),
        onSubmit: async (values) => {
            setIsUpdating(true);
            const data = new FormData();
            
            // Format the data according to backend expectations
            const formattedValues = {
                ...values,
                category: values.category.map(cat => cat.name), // Send category names
              
            };

            // Append all values to FormData
            Object.entries(formattedValues).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    if (key === "thumbnailImage" && value instanceof File) {
                        data.append(key, value);
                    } else if (Array.isArray(value)) {
                        data.append(key, value.join(','));
                    } else {
                        data.append(key, value);
                    }
                }
            });

            try {
                await dispatch(updateProduct(data)).unwrap();
                toast.success("Product updated successfully");
                if (onSave) onSave();
            } catch (error) {
                toast.error(error?.error || "Failed to update product");
            } finally {
                setIsUpdating(false);
            }
        },
    });

    const handleFileChange = async (e) => {
        const file = e.currentTarget.files[0];

        if (file) {
            // Clear previous preview if it exists
            if (imagePreviewRef.current) {
                URL.revokeObjectURL(imagePreviewRef.current.src);
            }

            // Compress the image
            try {
                const { file: compressedFile, preview } = await compressImage(file);

                  // Set the compressed file and its preview in Formik
                  formik.setFieldValue("thumbnailImage", compressedFile);

                   // Set the preview image
                if (imagePreviewRef.current) {
                    imagePreviewRef.current.src = preview;
                }
            } catch (error) {
                toast.error("Image compression failed: " + error.message);
                console.error("Compression error:", error);
            }
        }
                // // Create and set new preview
                // const previewUrl = URL.createObjectURL(file);
                // if (imagePreviewRef.current) {
                //     imagePreviewRef.current.src = previewUrl;
                // }

            //     formik.setFieldValue("thumbnailImage", file);
            // }

        formik.setFieldTouched("thumbnailImage", true, false);
        };

    const handleCategorySelect = (category) => {
        const existingCategories = formik.values.category;
        if (!existingCategories.find(cat => cat._id === category._id)) {
            formik.setFieldValue("category", [...existingCategories, category]);
        }
    };

    const handleRemoveCategory = (categoryId) => {
        const updatedCategories = formik.values.category.filter(
            cat => cat._id !== categoryId
        );
        formik.setFieldValue("category", updatedCategories);
    };

    const handleProductTypeSelect = (type) => {
        formik.setFieldValue("productTypeName", type.name);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                    {/* Name and SKU fields */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-2">
                            Product Name
                        </label>
                        <Input
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product name"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500">{formik.errors.name}</div>
                        )}
                    </div>

                      {/* Thumbnail Image */}
                      <div>
                                <label className="block text-sm font-medium text-gray-700 pb-2">Thumbnail Image</label>
                                <div className="space-y-4">

                                    {/* File Input */}
                                    <div className="flex flex-col">
                                        <Input
                                            ref={fileInputRef}
                                            type="file"
                                            name="thumbnailImage"
                                            onChange={handleFileChange}
                                            onBlur={formik.handleBlur}
                                            className="input"
                                            accept="image/jpeg,image/png,image/webp"
                                        />
                                        {(formik?.touched?.thumbnailImage || formik.values.thumbnailImage) && formik.errors.thumbnailImage && (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.thumbnailImage}</div>
                                        )}
                                    </div>

                                    {/* Image Preview */}
                                    {(product?.thumbnailImage || formik.values.thumbnailImage) && (
                                        <div className="relative w-[80px] h-[80px] border rounded-lg overflow-hidden">
                                            <img
                                                ref={imagePreviewRef}
                                                src={formik.values.thumbnailImage ? URL.createObjectURL(formik.values.thumbnailImage) : product?.thumbnailImage}
                                                alt="Product thumbnail"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-2">
                            Code
                        </label>
                        <Input
                            name="sku"
                            value={formik.values.sku}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter SKU"
                        />
                        {formik.touched.sku && formik.errors.sku && (
                            <div className="text-red-500">{formik.errors.sku}</div>
                        )}
                    </div>

                    {/* Categories */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-2">
                            Specialities
                        </label>
                        <div className="space-y-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {formik.values.category.map((category) => (
                                    <Badge
                                        key={category._id}
                                        className="flex items-center gap-1"
                                        variant="secondary"
                                    >
                                        {category.name}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveCategory(category._id)}
                                            className="ml-1"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full">
                                        Add Speciality
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {categories
                                        .filter(category => !formik.values.category
                                            .find(cat => cat._id === category._id))
                                        .map((category) => (
                                            <DropdownMenuItem
                                                key={category._id}
                                                onClick={() => handleCategorySelect(category)}
                                            >
                                                {category.name}
                                            </DropdownMenuItem>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        {formik.touched.category && formik.errors.category && (
                            <div className="text-red-500">{formik.errors.category}</div>
                        )}
                    </div>

                    {/* Product Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-2">
                            Product Type
                        </label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    {formik.values.productTypeName || "Select Product Type"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {productTypes.map((type) => (
                                    <DropdownMenuItem
                                        key={type._id}
                                        onClick={() => handleProductTypeSelect(type)}
                                    >
                                        {type.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {formik.touched.productTypeName && formik.errors.productTypeName && (
                            <div className="text-red-500">{formik.errors.productTypeName}</div>
                        )}
                    </div>
                </div>

                {/* Composition */}
                <div className="flex flex-col items-center">
                    <div className="max-w-4xl w-full mt-6">
                        <label className="block text-sm font-medium text-gray-700 pb-2">
                            Composition
                        </label>
                        <JoditEditor
                            ref={compositionEditorRef}
                            value={formik.values.composition}
                            config={compositionConfig}
                            tabIndex={2}
                            onBlur={newContent => formik.setFieldValue('composition', newContent)}
                        />
                    </div>
                </div>

                {/* Tags */}
                {/* <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 pb-2">
                        Tags
                    </label>
                    <Input
                        name="tags"
                        value={formik.values.tags.join(',')}
                        onChange={(e) => formik.setFieldValue('tags', e.target.value.split(','))}
                        onBlur={formik.handleBlur}
                        placeholder="Enter tags separated by commas"
                    />
                </div> */}

                <DialogFooter>
                    <Button type="submit" className="bg-blue-600" disabled={isUpdating}>
                        {isUpdating ? <CustomSpinner size={20} /> : "Update"}
                    </Button>
                </DialogFooter>
            </form>
        </div>
    );
};

export default EditProduct;




// <div>
//                     <label className="block">use</label>
//                     <Input
//                         name="use"
//                         value={formik.values.use}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         placeholder="Enter use"
//                         required
//                     />
//                     {formik.touched.use && formik.errors.use && (
//                         <div className="text-red-500">{formik.errors.use}</div>
//                     )}
//                 </div>