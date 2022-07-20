

const userGet = (req, res) => {
    res.json({
        
        msg: 'Stiven Controlador get'
    });
  }

 const userPost = (req, res) => {
     const body = req.body;
     //console.log( req );
    res.status(200).json({
        
        msg: 'Stiven controller post',
        body
    });
  } 

  const userPut = (req, res) => {
      //const id = req.params.id;
      const { id } = req.params;
    res.json({
       msg: 'Stiven controller put',
       id
    });
  }

  const userDelete = (req, res) => {
    res.json({
        msg: 'Stiven H delete'
    });
  }

  module.exports = { 
      userGet,
      userPost,
      userPut,
      userDelete
  };