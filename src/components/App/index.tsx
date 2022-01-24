import React, {useEffect, useState} from "react";
import { getMembers, submitTask } from "../../apiService";
import Confirmation from "../Confirmation";
import Dashboard from "../Dashboard";
import Button, {Kinds} from "../Button";
import Form from "../Form";
import Input from "../Input";
import Select, {Members} from '../Select';
const App = () => {
  const [members, setMembers] = useState<Members[] | []>([]);;
  const [selectedMember, setSelectedMember] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, setMsg] = useState("");
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
            if(selectedMember && desc){
              const params = {
                description: desc,
                member: selectedMember
              }
              submitTask(params).then((res) => {
                if(res){
                  setMsg(`Task #4: "${res.description}" has been assigned to ${res.member}.`)
                }
              })
            }
          }}
        >
          <Input id="description" label={"Task description:"} onChange={changeDesc}/>
          <Select id="task" label={"Assign task to..."} members={members} onChange={selectMember}/>
          <Button kind={Kinds.primary} disabled={!selectedMember && !desc}>Submit</Button>
        </Form>
        {msg && <Confirmation message={msg} />}
      </Dashboard>
    </div>
  );
};

export default App;
