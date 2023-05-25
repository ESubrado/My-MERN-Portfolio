import { UserData } from "../interface/interfaces";

export async function getRecords(callback?: any) {
  const response = await fetch(`http://localhost:5000/record/`);

  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }

  const records = await response.json();
  
  //setting ids
  for(var i=0; i<records.length; i++){
    records[i].id = i+1
  }
  
  if(callback) callback(records)
}

export async function UpdateEntry(event: UserData, callback?: any) {   
    await fetch(`http://localhost:5000/update/${event._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
    .catch(error => {
      window.alert(error);
      if(callback) callback({error: true})
      return;
    });  
    
    if(callback) callback({success: true})
}

export async function CreateEntry(newUser: UserData, callback? : any) { 
  const newPerson = { ...newUser };

  await fetch("http://localhost:5000/record/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    if(callback) callback({error: true})
    window.alert(error);
    return;
  });

  if(callback) callback({success: true})
  //setForm({ name: "", position: "", level: "" });
  //navigate("/");
}

export async function DeleteRecord(id: number, callback? : any) {
  await fetch(`http://localhost:5000/record/${id}`, {
    method: "DELETE"
  });

  //const newRecords = records.filter((el) => el._id !== id);
  //setRecords(newRecords);
}