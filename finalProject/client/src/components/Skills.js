import {connect} from 'react-redux'
import {getSkill, getSkills} from '../redux/actions.js'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const MultipleSelectChip =(props)=>{

const skill = [
  'CSS',
  'HTML',
  'React js',
  'Node js',
  'Java script',
  'Redux',
  'PostgreSQL',
  'Python',
  'Django',
  'Git & Github',
];

return(
  <>
  <div>
  <FormControl variant="standard" style={{margin:'10px',width:'25%'}}>
  <InputLabel id="demo-simple-select-standard-label">Skills</InputLabel>
  <Select
  labelId="demo-simple-select-standard-label"
  id="demo-simple-select-standard"
  label="Skills"

  onChange={(e)=>props.getSkill(e.target.value)}>
    {
      skill.map((item, i)=>{
        return(
          <MenuItem key={i} value={item}>{item}</MenuItem>
        )
      })
    }
  </Select>
  </FormControl>

  <Button onClick={()=>props.getSkills()} style={{margin:'10px'}}>Add skill</Button>
  </div>
  </>
  );
}
const mapStateToProps=(state)=>{
  return {
    skills:state.skills
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    getSkill:(obj) => dispatch(getSkill(obj)),
    getSkills:() => dispatch(getSkills())
  }
}

export default connect(mapStateToProps,mapDispatchToProp) (MultipleSelectChip)
