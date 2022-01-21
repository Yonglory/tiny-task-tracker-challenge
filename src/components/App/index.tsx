import React, {useEffect, useState} from "react";
import { getMembers } from "../../apiService";
import Confirmation from "../Confirmation";
import Dashboard from "../Dashboard";
import Button, {Kinds} from "../Button";
import Form from "../Form";
import Input from "../Input";
import Select from '../Select';
const App = () => {
  const [members, setMembers] = useState();
  const [selectedMember, setSelectedMember] = useState("");
  const [desc, setDesc] = useState("");
  const selectMember = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMember(e.target.value)
  }
  const changeDesc = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }
  useEffect(() => {
    getMembers().then((res) => {
      if(res){
        setMembers(res)
      }
    })
  }, []);
  return (
    <div className="app">
      <Dashboard>
        <Form
          handleSubmit={() => {
            /*TODO*/
            console.log(selectedMember, desc)
          }}
        >
          <Input id="description" label={"Task description:"} onChange={changeDesc}/>
          <Select id="task" label={"Assign task to..."} members={members} onChange={selectMember}/>
          <Button kind={Kinds.primary}>Submit</Button>
        </Form>
        <Confirmation message="Show results here..." />
      </Dashboard>
    </div>
  );
};

export default App;
