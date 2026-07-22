const movies=require("../models/movie.model")


const ambilMovie=async(req,res)=>{
    const getMovie=await movies.getMovies()

    if(!getMovie){
        return res.status(400).json({massage:"ambil movie gagal"})
    }
    return res.status(200).json({data:getMovie})
}

const ambilMovieID=async(req,res)=>{
    const id=req.params.id

    const getMovieID=await movies.getMoviesID(id)

    if(id==0||!id){
         return res.status(400).json({massage:"ambil movie berdasarkan id gagal"})
    }
     return res.status(200).json(getMovieID)
}



const tambahMovie=async(req,res)=>{

    const body=req.body

    const postMovie=await movies.postMovies(body)

     if(!postMovie){
        return res.status(400).json({massage:"post user gagal"})
}
  return res.status(200).json({massage:"post user berhasil",data:body})

}


const ubahMovie=async (req,res)=>{
    const id=req.params.id

    const body=req.body


    const updateUser=await movies.updateMovies(id,{
         nama_movie:body.nama_movie,
        kategori_umur:body.kategori_umur,
        deskripsi_movie:body.deskripsi_movie
    })

    if(id==0){
         return res.status(400).json({massage:"update movie gagal"})
    }

return res.status(200).json({massage:"update movie berhasil,",data:body})
}

const hapusMovie=async (req,res)=>{
      const id=req.params.id
      console.log(id)

      const deleteMovie= await movies.deleteMovies(id)
 if(deleteMovie==0){
         return res.status(400).json({massage:"hapus movie gagal"})
    }

return res.status(200).json({massage:"hapus movie berhasil"})

      
}

module.exports={ambilMovie,ambilMovieID,ubahMovie,tambahMovie,hapusMovie}



