const users=require("../models/database.model")


const ambilUser=async(req,res)=>{
    try{

         const getUser=await users.getUsers()

    if(getUser==0){
        return res.status(400).json({massage:"ambil users gagal"})
    }
    return res.status(200).json({data:getUser})
}

  catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil database user ",
      error: error.message,
    });
  }
    }
   


const tambahUser=async(req,res)=>{

    try{
         const body=req.body

    const postUser=await users.postUsers(body)

     if(postUser==0){
        return res.status(400).json({massage:"post user gagal"})
}
  return res.status(200).json({massage:"post user berhasil",data:body})

    }

      catch (error) {
    return res.status(500).json({
      message: "Gagal mengubah database user",
      error: error.message,
    });
  }

   
}


const ubahUser=async (req,res)=>{
    try{
         const id=req.params.id

    const body=req.body


    const updateUser=await users.updateUser(id,{
        user_nama:body.user_nama,
        user_password:body.user_password
    })

    if(updateUser==0){
         return res.status(400).json({massage:"update user gagal"})
    }

return res.status(200).json({massage:"update user berhasil,",data:body})
    }

      catch (error) {
    return res.status(500).json({
      message: "Gagal Update database user",
      error: error.message,
    });
  }
   
}

const hapusUser=async (req,res)=>{

    try{
          const id=req.params.id
      console.log(id)

      const deleteUser= await users.deleteUsers(id)
 if(deleteUser==0){
         return res.status(400).json({massage:"hapus user gagal"})
    }

return res.status(200).json({massage:"hapus user berhasil"})

    }

      catch (error) {
    return res.status(500).json({
      message: "Gagal hapus database user",
      error: error.message,
    });
  }
    
      
}

module.exports={ambilUser,tambahUser,ubahUser,hapusUser}



