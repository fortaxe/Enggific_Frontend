import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { createProductType } from "@/redux/productTypeSlice";
import { Input } from "@/components/ui/input";
import CustomSpinner from "@/adminComponents/CustomSpinner";
import { toast } from "react-toastify";
import {  supportedFormats } from "@/constant/constant";
import { compressImage } from "./CompressImage";

const CreateProductType = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { createProductTypeLoading } = useSelector((state) => state.productTypeList);
    const [isCreating, setIsCreating] = useState(false);
    const [name, setName] = useState("");
    const [productTypeLogo, setProductTypeLogo] = useState(null);
    const [errors, setErrors] = useState({});

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProductTypeLogo(file);
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Check for category name
        if (!name) {
            newErrors.name = "Product type name is required";
        }

        // Check for category logo
        if (!productTypeLogo) {
            newErrors.productTypeLogo = "Product Type logo is required";
        } else if (!supportedFormats.includes(productTypeLogo.type)) {
            newErrors.productTypeLogo = `Category logo is not a supported format. Please upload jpg, png, jpeg, or webp.`;
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsCreating(true);
        const formData = new FormData();
        formData.append("name", name);
        if (productTypeLogo) {
            try {
                // Compress the image before adding it to the form data
                const { file: compressedFile } = await compressImage(productTypeLogo);
                formData.append("productTypeLogo", compressedFile);
            } catch (error) {
                toast.error("Failed to compress image");
                setIsCreating(false);
                return;
            }
        }

        try {
            await dispatch(createProductType(formData)).unwrap();
            toast.success("Product Type created successfully");
            handleCloseAndReset();
        } catch (error) {
            const errorMessage = error?.error || error?.message || "Failed to create product type";
            toast.error(errorMessage);
        } finally {
            setIsCreating(false);
        }
    };

    const handleCloseAndReset = () => {
        setName("");
        setProductTypeLogo(null);
        setErrors({});
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleCloseAndReset}>
            <DialogContent className="text-color-[#386D62]">
                <DialogHeader>
                    <DialogTitle>Add New Product Type</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Name</label>
                        <Input
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product type name"
                        />
                        {errors.name && (
                            <div className="text-red-500">{errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1">Logo</label>
                        <Input type="file" name="productTypeLogo" onChange={handleImageChange} accept="image/png,image/jpeg,image/jpg" />
                        {errors.prodcutTypeLogo && (
                            <div className="text-red-500">{errors.prodcutTypeLogo}</div>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={isCreating}>
                            {isCreating ? <CustomSpinner size={20} /> : "Create"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateProductType;
