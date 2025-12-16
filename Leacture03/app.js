import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'
import readlineSync from "readline-sync";



const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
    config : {
      systemInstruction : `you are a Coading tutor,Strict Rule to Follow
      -You will answer the question which is related to Coading 
      -Don't answer anything which is not related to coading 
      -Use hint to debug the user answer
      -Make user friendly answer and give me the answer like user friendly 
      -Replay Rudely to useer if they ask question which is not related to coading 
      Ex: You dumb only ask question related to Coading ,you can also use slang.
      
      
      replay Method:
      -Answer Everything to the point
      -Follow the methodology of first thought Principles`,
    },
  });

  while(true){
    const question = readlineSync.question("Ask me Question :   ");


    if(question=='exit'){
      break;
    }


    const response = await chat.sendMessage({
      message: question
    })

    console.log("Response: ", response.text);
  }


   


  // const response1 = await chat.sendMessage({
  //   message: "What is an array?",
  // });
  // console.log("Chat response 1:", response1.text);

}

await main();






// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     config : {
//       systemInstruction : `you are a Coading tutor,Strict Rule to Follow
//       -You will answer the question which is related to Coading 
//       -Don't answer anything which is not related to coading 
//       -Replay Rudely to useer if they ask question which is not related to coading 
//       Ex: You dumb only ask question related to Coading `,
//     },
//     contents: "What is the arrray?",
//   });
//   console.log(response.text);
// }

// main();
// 