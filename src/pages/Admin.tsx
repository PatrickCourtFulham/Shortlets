import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Eye, EyeOff, Calendar, Users, Mail, Phone, Trash2, Edit, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AdminSidebar } from "@/components/AdminSidebar";
import { GalleryUploadModal } from "@/components/GalleryUploadModal";
import { ReviewUploadModal } from "@/components/ReviewUploadModal";
import { GalleryEditModal } from "@/components/GalleryEditModal";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings");
  const [editingImage, setEditingImage] = useState<any>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      checkIn: "2024-02-15",
      checkOut: "2024-02-20",
      guests: 2,
      message: "Anniversary celebration",
      status: "confirmed"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+0987654321",
      checkIn: "2024-02-25",
      checkOut: "2024-02-28",
      guests: 4,
      message: "Business trip",
      status: "pending"
    }
  ]);
  const [galleryImages, setGalleryImages] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Living Room", category: "living" },
    { id: 2, url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", title: "Bedroom", category: "bedroom" },
    { id: 3, url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", title: "Kitchen", category: "kitchen" }
  ]);
  const [newImage, setNewImage] = useState({ url: "", title: "", category: "living" });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "2024-01-15",
      text: "Absolutely stunning apartment! The attention to detail is incredible.",
      avatar: "SJ",
      approved: true
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 4,
      date: "2024-01-10",
      text: "Great experience overall. Beautiful space and excellent service.",
      avatar: "MC",
      approved: false
    }
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    rating: 5,
    text: "",
    avatar: ""
  });
  const { toast } = useToast();

  // Hardcoded credentials
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "luxury2024";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setActiveTab("bookings");
  };

  const updateBookingStatus = (id: number, status: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
    toast({
      title: "Booking Updated",
      description: `Booking status changed to ${status}`,
    });
  };

  const deleteBooking = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    toast({
      title: "Booking Deleted",
      description: "Booking has been removed",
    });
  };

  const addGalleryImage = () => {
    if (newImage.url && newImage.title) {
      const newId = Math.max(...galleryImages.map(img => img.id)) + 1;
      setGalleryImages([...galleryImages, { ...newImage, id: newId }]);
      setNewImage({ url: "", title: "", category: "living" });
      toast({
        title: "Image Added",
        description: "New gallery image has been added",
      });
    }
  };

  const deleteGalleryImage = (id: number) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id));
    toast({
      title: "Image Deleted",
      description: "Gallery image has been removed",
    });
  };

  const addReview = () => {
    if (newReview.name && newReview.text) {
      const newId = Math.max(...reviews.map(review => review.id)) + 1;
      const avatar = newReview.avatar || newReview.name.split(' ').map(n => n[0]).join('').toUpperCase();
      setReviews([...reviews, { 
        ...newReview, 
        id: newId, 
        avatar,
        date: new Date().toISOString().split('T')[0],
        approved: false
      }]);
      setNewReview({ name: "", location: "", rating: 5, text: "", avatar: "" });
      toast({
        title: "Review Added",
        description: "New review has been added for approval",
      });
    }
  };

  const approveReview = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, approved: true } : review
    ));
    toast({
      title: "Review Approved",
      description: "Review is now visible to customers",
    });
  };

  const deleteReview = (id: number) => {
    setReviews(reviews.filter(review => review.id !== id));
    toast({
      title: "Review Deleted",
      description: "Review has been removed",
    });
  };

  const editGalleryImage = (image: any) => {
    setEditingImage(image);
    setEditModalOpen(true);
  };

  const saveGalleryImage = (updatedImage: any) => {
    setGalleryImages(galleryImages.map(img => 
      img.id === updatedImage.id ? updatedImage : img
    ));
    toast({
      title: "Image Updated",
      description: "Gallery image has been updated",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          onLogout={handleLogout}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === "bookings" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Booking Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{booking.name}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {booking.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {booking.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {booking.guests} guests
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {booking.checkIn} to {booking.checkOut}
                          </p>
                          <p className="text-sm">{booking.message}</p>
                          <Badge 
                            variant={booking.status === "confirmed" ? "default" : "secondary"}
                            className="mt-2"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Button
                            size="sm"
                            onClick={() => updateBookingStatus(booking.id, "confirmed")}
                            disabled={booking.status === "confirmed"}
                          >
                            Confirm
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateBookingStatus(booking.id, "pending")}
                            disabled={booking.status === "pending"}
                          >
                            Set Pending
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteBooking(booking.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Gallery Management</CardTitle>
                  <GalleryUploadModal onAddImage={addGalleryImage} />
                </CardHeader>
                <CardContent>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                      <Card key={image.id} className="overflow-hidden">
                        <div className="aspect-square">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">{image.title}</h3>
                          <Badge variant="outline" className="mt-1 mb-2">
                            {image.category}
                          </Badge>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => editGalleryImage(image)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              className="flex-1"
                              onClick={() => deleteGalleryImage(image.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Reviews Management</CardTitle>
                  <ReviewUploadModal onAddReview={addReview} />
                </CardHeader>
                <CardContent>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {review.avatar}
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-sm text-muted-foreground">{review.location} • {review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <Badge 
                              variant={review.approved ? "default" : "secondary"}
                              className="ml-2"
                            >
                              {review.approved ? "Approved" : "Pending"}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                        <div className="flex gap-2">
                          {!review.approved && (
                            <Button
                              size="sm"
                              onClick={() => approveReview(review.id)}
                            >
                              Approve
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteReview(review.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
        
        <GalleryEditModal
          image={editingImage}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSaveImage={saveGalleryImage}
        />
      </div>
    </SidebarProvider>
  );
};

export default Admin;