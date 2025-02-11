import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductType } from "@/redux/productTypeSlice";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import {Button} from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import CustomSpinner from "./CustomSpinner";

const EditProductType = ({ productType, isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(productType?.name);
    const [logo, setLogo] = useState(null);
    const { updateProductTypeLoading } = useSelector((state) => state.productTypeList);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('id', productType?._id);
      formData.append('name', name);
      if (logo) {
        formData.append('productTypeLogo', logo);
      }
  
      try {
        await dispatch(updateProductType(formData)).unwrap();
        onClose();
        toast.success('Product Type updated successfully');
      } catch (error) {
       console.log(error);
        // Handle different error formats
      const errorMessage = error?.error || error?.message || error?.toString() || 'Failed to update product type';
      toast.error(errorMessage);
      }
    };
  
    return (
      <AlertDialog open={isOpen} onClose={onClose} >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Product Type</AlertDialogTitle>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 pb-2">Name</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                className="w-full"
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">Logo</label>
              <Input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                accept="image/png,image/jpeg,image/jpg"
                className="w-full"
              />
            </div>
            <div className="flex justify-end gap-2">
              <AlertDialogCancel asChild>
                <Button variant="outline" type="button" onClick={onClose}>
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button 
                type="submit" 
                disabled={updateProductTypeLoading}
              >
                {updateProductTypeLoading ? <CustomSpinner /> : 'Update'}
              </Button>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  export default EditProductType;