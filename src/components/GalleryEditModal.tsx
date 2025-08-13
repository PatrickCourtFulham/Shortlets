import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

interface GalleryEditModalProps {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaveImage: (image: GalleryImage) => void;
}

export const GalleryEditModal = ({ image, open, onOpenChange, onSaveImage }: GalleryEditModalProps) => {
  const [editImage, setEditImage] = useState<GalleryImage>({ id: 0, url: "", title: "", category: "living" });

  useEffect(() => {
    if (image) {
      setEditImage(image);
    }
  }, [image]);

  const handleSubmit = () => {
    if (editImage.title) {
      onSaveImage(editImage);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Gallery Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="editTitle">Title</Label>
            <Input
              id="editTitle"
              value={editImage.title}
              onChange={(e) => setEditImage({...editImage, title: e.target.value})}
              placeholder="Image title"
            />
          </div>
          
          <div>
            <Label htmlFor="editCategory">Category</Label>
            <select
              id="editCategory"
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
              value={editImage.category}
              onChange={(e) => setEditImage({...editImage, category: e.target.value})}
            >
              <option value="living">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
            </select>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSubmit} className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};