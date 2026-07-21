const users=require("../models/database.model")


const ambilUser=async(req,res)=>{
    const getUser=await users.getUsers()

    if(!getUser){
        return res.status(400).json({massage:"ambil users gagal"})
    }
    return res.status(200).json({data:getUser})
}


const tambahUser=async(req,res)=>{

    const body=req.body

    const postUser=await users.postUsers(body)

     if(!postUser){
        return res.status(400).json({massage:"post user gagal"})
}
  return res.status(200).json({massage:"post user berhasil",data:body})

}


const ubahUser=async (req,res)=>{
    const id=req.params.id

    const body=req.body


    const updateUser=await users.updateUser(id,{
        user_nama:body.user_nama,
        user_password:body.user_password
    })

    if(id==0){
         return res.status(400).json({massage:"update user gagal"})
    }

return res.status(200).json({massage:"update user berhasil,",data:body})
}

const hapusUser=async (req,res)=>{
      const id=req.params.id
      console.log(id)

      const deleteUser= await users.deleteUsers(id)
 if(deleteUser==0){
         return res.status(400).json({massage:"hapus user gagal"})
    }

return res.status(200).json({massage:"hapus user berhasil"})

      
}

module.exports={ambilUser,tambahUser,ubahUser,hapusUser}



