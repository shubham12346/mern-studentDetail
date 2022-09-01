import  express  from "express";
const router = express.Router();
import  {getStudent ,createStudent,deleteStudent} from "../controllers/student.js";



router.get("/",getStudent);
router.post("/",createStudent);
router.delete("/:id",deleteStudent);

export default router;