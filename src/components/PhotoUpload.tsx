import { motion } from "framer-motion";
import { Camera, Upload } from "lucide-react";
import { useState, useRef } from "react";

const PhotoUpload = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative Elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-2xl animate-pulse-glow" />
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float-delayed" />

      <motion.div
        className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden cursor-pointer glass-card glow-effect"
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />

        {photo ? (
          <>
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Camera size={32} className="text-primary" />
              <span className="text-sm font-medium">Change Photo</span>
            </motion.div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
            <motion.div
              animate={{ y: isHovering ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Upload size={48} className="text-primary" />
            </motion.div>
            <div className="text-center">
              <p className="font-medium mb-1">Upload Your Photo</p>
              <p className="text-sm text-muted-foreground">
                Click to browse
              </p>
            </div>
          </div>
        )}

        {/* Animated Border Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse-glow" />
      </motion.div>
    </motion.div>
  );
};

export default PhotoUpload;
