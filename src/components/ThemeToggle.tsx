import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="h-8 w-8 sm:h-9 sm:w-9 p-0 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-muted/80 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "light" ? 0 : 180,
            scale: theme === "light" ? 1 : 0.8
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {theme === "light" ? (
            <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
          ) : (
            <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;