import StudentData from "../models/student.js";

export  const getStudent = async(req,res)=>{
    // res.send("Router is working ");
    try{
         const allstudent = await StudentData.find();
         res.status(200).json(allstudent);

    }catch(error){
        res.status(404).json({message:error.message})
    }

   
}

export const createStudent =async(req,res)=>{
    // res.send('Router is working for post ');

    const stud = req.body;
    const newStudent = new StudentData(stud);

    try{
       await  newStudent.save();

       res.status(201).json(newStudent);
    }catch(error)
    {
        res.status(409).json({message: error.message})
    } 
}

export const deleteStudent = async(req,res)=>{
    const id = req.params.id;
    try{
        console.log("del");
        await StudentData.findByIdAndRemove(id).exec();
        res.send('sucessfully Deleted ');
    }catch(error){
        console.log(error);
    }
}
