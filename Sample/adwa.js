const val=new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });
  

  val.then((data)=>{
    data.then(()=>{
        console.log("hi")
    })
  })