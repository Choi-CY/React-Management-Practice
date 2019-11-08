import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'; // 어떠한 컴퍼런트의 외부를 감싸기 위한 것
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3, // 위쪽 여백을 3의 가중치만큼 주겠다.
    overflowX:"auto"
  },
  table:{
    minWidth: 1080 // 최소 1080 pixel을 이용한다
  }
})


// Component 웹 문서에서 어떠한 것을 보여주기 위한 기본적인 단 
const customers =[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '9509919',
  'gender':'남자',
  'job':'프로그래머'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍현희',
  'birthday' : '9509920',
  'gender':'여자',
  'job':'프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '호날두',
  'birthday' : '9509319',
  'gender':'남자',
  'job':'축구선수'
}
]
class App extends Component{
  render(){
    const {classes} = this.props; // 위에서 정의한 스타일이 적용되게 한다.
    return (
      <Paper classNmae = {classes.root}>
       <Table className = {classes.table}>
         <TableHead>
           <TableRow>
             <TableCell>번호</TableCell>
             <TableCell>사진</TableCell>
             <TableCell>이름</TableCell>
             <TableCell>생년월일</TableCell>
             <TableCell>성별</TableCell>
             <TableCell>직업</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
         {
          customers.map(c =>{
            return(
              <Customer 
              id= {c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender = {c.gender}
              job = {c.job}/>
            );
          })
        }
         </TableBody>
       </Table>
      </Paper>
    );
  } 
}

export default withStyles(styles)(App);
