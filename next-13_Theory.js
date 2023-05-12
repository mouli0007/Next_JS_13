


######## Again With Next JS 13  ######################


npx create-next-app@latest (it u wanna use your app directory structure)

### App Directory Hints !

1=> Each Custom Route Should be in a folder which has an index page as (page.jsx )

### Layout hints !

 2=> if you want to create a layout for a specific cutom route folder and also for all
     the nested route in it => create a layout.jsx file and render {children from it}


#### export meta data 

   We can export our meta data and we can use it Whereever we want 
   
   #### Server vs client components !
   
   1=> by default every component is server component !
   2=> 'use client' to make it as client component
   
   ### Fethcing the data from server components !
   
    we dont need to use useEffect we can just create a function and 
	we can ivoke it in a server component !
	
	##### Loading  
	
	for a custom loading make sure you name a file with (loading.jsx)
	
	
	#### suspense Boundries !!!
	import { Suspense } from "react";

	=>to make some components to load or render after some time !
	
	
	#### Caching and revalidation !
	
	 const response = await fetch(
      `https://api.github.com/repos/mouli0007/${name}`,
      {
        next: {
          revalidate: 10,
        },
      }
	  
	  ####  Api Route handlers !
	  
        ########## Getting all the data !

	  import { NextResponse } from "next/server";
			import courses from "./data.json";

			export async function GET(request) {
			  return NextResponse.json(courses);
			}


        ######### Getting the specific Data 
		
		import { NextResponse } from "next/server";

				import courses from "../data.json";

				export async function GET(request) {
				  const { searchParams } = new URL(request.url);
				  const query = searchParams.get("query");
				  const filteredCourses = courses.filter((course) => {
					return course.title.toLowerCase().includes(query.toLowerCase());
				  });
				  return NextResponse.json(filteredCourses);
				}


#### Next js 13 Updates PArt 2 ! #########


		1=> To make app directory routing ! 
		  go to nextconfig => experimental : {
			appDir : true
		  }
		  
		  #### Important File Conventions #########
		     
			 Layout (Preserves the page and prevents unesessary re-renders)
			 Page
			 Loading...
			 Error
			 Template
			 Head
			 Not Found
		 
		 
		 
		 2=> You can make your functional component async 
		 
		 3=> Options in fetch api while fetching the data !
		 
		     
			 const fetch = async()=>{
			 
				const response = await fetch(URL,  {
				
				cache : "no-cache"  ####(Server-Side-rendering)
				cache : "force-cache"  ####(Static Side Generation)
				
				next : {
				
				revalidate : 60 ###### (ISR)
				}
				})
			 }
			 
		##### Making with ISR to pre-render all the dynamic route !
					
			The generateStaticParams function can be used in 
			combination with dynamic route segments to statically generate routes 
			at build time instead of on-demand at request time.


		##### generateStaticParams() func()
		
			export async function generateStaticParams() {
				  try {
					const response = await fetch("URL");
					const todos = await response.json();

					const preRenderedTodos = todos.map((todo) => {
					  todoId: todo.id.toString();
					});

					return preRenderedTodos;
				  } catch (err) {
					console.log(err);
					throw new Error(err);
				  }
				}


	 ### and it will automatically pre-renders with SSR for the pages which or not SSG
	     its same as fallback = true
		 
		 
		 ################################################################
		 
		 ##### export const dynamicParams = true;
		 
				we can toggle  the ability to generate SSG and SSR for the pages 
				which were not built during the build time !
				
				By default it will try to fetch evnthough the page is not available
				
			to block the default functionality ! 
			we can do this ! 
			
			import {notFound} from 'next/navigation'
			import {useRouter} from "next/navigation"
			if(!noPageAvailable) return notFound() => returns to not found page !
			
			
				##### When to use Server Components 
				
				Fetching the data !
				Access to the backend resource 
				Keep sensitive information on the server (tokens,API Keys)
				large dependency on server 
				
				#### when to use Functional Component !
				
				Interacting with clients 
				onChange() onClick()
				useState() useReducer() useEffect()
				browser only api 
				custom hooks !
				
				
   #### customizing the header attributes for web page ######
   
   with reserverd head component => head.tsx
   
   
   
   ###### Group routes ##############
   
    We can group all of our file names into one specific naming convention 
	if we have multiple routes to handle !
