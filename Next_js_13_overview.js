######  Next js 13 Inshights ! #############

### App Directory ### All components are server somponents not client components

1=> We can create an app directory and make it as an main Index page rather than using index.js in pages folder
2=> It will create an automatic layout section which we can avoid creating with manual components 
3=> and we can make file routing same as we does in pages directory
4=> In the Link Component we dont need to use a tag to work on different scenarios

5=> Since its a server components we can make it as async even in high level component

6=> For dynamic pages we have to create a dynamic folder with a square bracket and we have to add a page.js file 
    so that file will act as a dynamic page
	
	### import {notFound} from 'next/navigation'
 7=> notFound()=> function re directs to 404 page 
 
 ### New Function => generateStaticParams ###
 
 #### Ability to cache and pre generate the pages which is not SSG or pre-generated
 
 
 ##### Syntax #####
 
 #### Same Like getStaticPaths() ### pre renders every pages 
 ### helps in avoiding fallback
 ## We dont need to use getStaticProps() for re validation we can use simple client side async fectch function
 
 export async function generateStaticParams() {
  const response = await fetch("URL");
  const todo = await response.json();

    
    
  return todo.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

##### Client Component #############


By Default All Next Js components are server side if you want to make them as a client component you have to 

##### "use client " #####

#### Next JS 13 In-Built components #####

### Loading 
### Error 
### Layout
### Head (We can add it to a specific folder and it act accordingly)

### We just need to create a file with the above extension and whereever we want in our project 
     and we can use whatever boilerplate code we want
	 
	 
	 ####  Next Js Suspense for optimization ####
	 
	 ### By Default it prevents Re Render for unwanted components !
	 
