import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Upload } from "lucide-react";

interface GalleryUploadModalProps {
  onAddImage: (image: { url: string; title: string; category: string }) => void;
}

export const GalleryUploadModal = ({ onAddImage }: GalleryUploadModalProps) => {
  const [open, setOpen] = useState(false);
  const [newImage, setNewImage] = useState({ url: "", title: "", category: "living" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Create a preview URL
      const url = URL.createObjectURL(file);
      setNewImage({...newImage, url});
    }
  };

  const handleSubmit = () => {
    if (newImage.url && newImage.title) {
      onAddImage(newImage);
      setNewImage({ url: "", title: "", category: "living" });
      setSelectedFile(null);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Gallery Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="imageFile">Upload Image</Label>
            <div className="mt-1">
              <Input
                id="imageFile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>
            {selectedFile && (
              <div className="mt-2 text-sm text-muted-foreground">
                Selected: {selectedFile.name}
              </div>
            )}
          </div>
          
          <div>
            <Label htmlFor="imageTitle">Title</Label>
            <Input
              id="imageTitle"
              value={newImage.title}
              onChange={(e) => setNewImage({...newImage, title: e.target.value})}
              placeholder="Image title"
            />
          </div>
          
          <div>
            <Label htmlFor="imageCategory">Category</Label>
            <select
              id="imageCategory"
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
              value={newImage.category}
              onChange={(e) => setNewImage({...newImage, category: e.target.value})}
            >
              <option value="living">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
            </select>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSubmit} className="flex-1">
              <Upload className="h-4 w-4 mr-2" />
              Add Image
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};