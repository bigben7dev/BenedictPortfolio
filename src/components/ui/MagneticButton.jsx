import { motion } from "framer-motion";
import Button from "./Button";
export default function MagneticButton(props) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Button {...props} />
    </motion.div>
  );
}
