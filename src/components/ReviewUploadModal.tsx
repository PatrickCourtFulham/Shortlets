import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

interface ReviewUploadModalProps {
  onAddReview: (review: { name: string; location: string; rating: number; text: string; avatar: string }) => void;
}

export const ReviewUploadModal = ({ onAddReview }: ReviewUploadModalProps) => {
  const [open, setOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    rating: 5,
    text: "",
    avatar: ""
  });

  const handleSubmit = () => {
    if (newReview.name && newReview.text) {
      onAddReview(newReview);
      setNewReview({ name: "", location: "", rating: 5, text: "", avatar: "" });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Customer Review</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reviewName">Customer Name</Label>
              <Input
                id="reviewName"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="reviewLocation">Location</Label>
              <Input
                id="reviewLocation"
                value={newReview.location}
                onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                placeholder="New York, USA"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reviewRating">Rating</Label>
              <select
                id="reviewRating"
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                value={newReview.rating}
                onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
            </div>
            <div>
              <Label htmlFor="reviewAvatar">Avatar Initials (Optional)</Label>
              <Input
                id="reviewAvatar"
                value={newReview.avatar}
                onChange={(e) => setNewReview({...newReview, avatar: e.target.value})}
                placeholder="JD"
                maxLength={3}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="reviewText">Review Text</Label>
            <Textarea
              id="reviewText"
              value={newReview.text}
              onChange={(e) => setNewReview({...newReview, text: e.target.value})}
              placeholder="Write the customer review..."
              className="min-h-[100px]"
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSubmit} className="flex-1">
              Add Review
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