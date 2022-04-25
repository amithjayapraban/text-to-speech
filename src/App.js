import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import { useSpeechSynthesis} from 'react-speech-kit';
function App() {
  const [text, setText] = useState('');
  const { speak ,pause,cancel,speaking} = useSpeechSynthesis();
  const[accent,setAccent] = useState('');
  var voices = speechSynthesis.getVoices();
console.log('accent',accent);
const pausefn=()=>{
  if(speaking){
    pause();
  }
}
  // var utterThis = new SpeechSynthesisUtterance();
  // console.log(voices);
 
  // if(text){
  //   speak({
  //     text,
  //     voice: voices.find(voice => voice.name === accent),
  //     rate: 1,
  //     pitch: 1,
  //     volume: 1,
  //     lang: 'en-US'
  //   });
  // }
  return (
    <div className="App">
    
   <select id='select' name='accent' onChange={e=>setAccent(e.target.value)} >
   
   <option id='option'selected disabled label='' value=''>Select preferred voice</option>
      {voices.map(voice => (<option id='option' value={voice.name}>{voice.name} ( {voice.lang} )</option>))}
   </select>
   <div className='h'>
      Text to Speech
    </div>
     <textarea rows='7' cols="50" id='area' placeholder="Enter your text here" onChange={e=>setText(e.target.value)} />
<button className='btn'onClick={()=>speak({text:text,voice:voices.find(voice => voice.name === accent)})}>
Listen
</button>
 <button className='btn stop'onClick={()=>cancel()}>Stop</button> 
 
</div>

    
  );
}

export default App;
