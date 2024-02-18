async function verifyCertificate(savedcourse) {

    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/PU-00iMyzujjZKf0k72eIFJ4a7zCHYUW"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const id = savedcourse._id;
    const issuedTo = savedcourse.StudentName;
    const issuedBy = savedcourse.issuername;
    const course = savedcourse.coursename;
    const issuedOn = savedcourse.Date;
    console.log(id, issuedTo, issuedBy, course, issuedOn);

    try {
      const transactionResponse = await contract.verifyCertificate(
        id,
        issuedTo,
        issuedBy,
        course,
        issuedOn
      );
      if (transactionResponse) {
        setResponse(true);
        setClass(customclass1)
        
      }
      else{
        setResponse(false);
        setClass(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
