
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { getCurrentUser } from '@/utils/auth';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  profilePic?: string;
}

const ReviewSection = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      {
        id: '1',
        name: 'Alex Johnson',
        rating: 5,
        comment: 'After the gaming optimization, my FPS went from 120 to 220+ in Valorant. The difference is incredible, and my gameplay has improved significantly.',
        date: '2023-06-15',
        profilePic: 'https://i.pravatar.cc/100?img=1'
      },
      {
        id: '2',
        name: 'Sarah Williams',
        rating: 5,
        comment: 'The working optimization made a huge difference in my workflow. My applications launch faster, and I can work with large files without any lag.',
        date: '2023-07-22',
        profilePic: 'https://i.pravatar.cc/100?img=5'
      },
      {
        id: '3',
        name: 'Mike Chen',
        rating: 4,
        comment: 'I was struggling with an old laptop, but after the regular optimization, it feels like a new machine. My battery life has improved too!',
        date: '2023-08-10',
        profilePic: 'https://i.pravatar.cc/100?img=3'
      }
    ];
  });
  
  const { toast } = useToast();
  const user = getCurrentUser();

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      toast({
        title: "Error",
        description: "Please enter a comment",
        variant: "destructive",
      });
      return;
    }
    
    const userName = user ? user.name : name.trim();
    
    if (!userName) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    const newReview: Review = {
      id: Date.now().toString(),
      name: userName,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0],
      profilePic: user ? user.profilePic : `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`
    };
    
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    
    setComment('');
    setRating(5);
    if (!user) setName('');
    
    toast({
      title: "Success",
      description: "Your review has been submitted successfully",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See what our customers have to say about our optimization services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="glass-card rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Leave a Review</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-6">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className="focus:outline-none mx-1"
                    >
                      <Star 
                        className={`h-8 w-8 ${value <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-center text-gray-400">
                  {rating === 5 ? 'Excellent!' : 
                   rating === 4 ? 'Very Good!' : 
                   rating === 3 ? 'Good' : 
                   rating === 2 ? 'Fair' : 'Poor'}
                </p>
              </div>
              
              {!user && (
                <div className="mb-4">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1"
                  />
                </div>
              )}
              
              <div className="mb-6">
                <Label htmlFor="comment">Your Review</Label>
                <Textarea 
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with our services..."
                  className="mt-1 h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-optimize-blue hover:bg-optimize-blue/90"
              >
                Submit Review <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="glass-card rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">User Reviews</h3>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.slice(0, 5).map((review, index) => (
                <motion.div 
                  key={review.id}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={review.profilePic} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </motion.div>
              ))}
            </div>
            {reviews.length > 5 && (
              <div className="mt-4 text-center">
                <Button variant="link" className="text-optimize-blue hover:text-optimize-blue/80">
                  Show all reviews ({reviews.length})
                </Button>
              </div>
            )}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Join our satisfied customers today!</h3>
            <p className="text-gray-400 mb-6">Experience the difference our optimization services can make for your PC.</p>
            <Button asChild className="bg-optimize-blue hover:bg-optimize-blue/90">
              <a href="/products">Get Started Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
