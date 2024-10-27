import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import React from 'react'

const AboutCard = () => {
  return (
    <div>
        <div className="max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>Who are we</CardTitle>
            
          </CardHeader>
          <CardContent>
            <p>
              Welcome to the St John's School Alumni Association, a vibrant
              community that brings together generations of proud graduates from
              St John's School, B.L.W, Varanasi. Since its inception in 1963, St
              John's School has been a beacon of academic excellence and
              holistic development, shaping the lives of countless students who
              have gone on to excel in various fields. The Alumni Association,
              established to foster lifelong connections among these
              accomplished individuals, serves as a bridge between the school's
              rich past and its promising future. Even after 40 years of leaving
              the school, many of our alumni remain actively involved,
              demonstrating their enduring commitment to the values and
              camaraderie instilled during their formative years. 
            </p> <br/>
            <p>
            In 2024, as we celebrate over six decades of the school's legacy, the St John's
              School Alumni Association stands as a testament to the strong
              bonds forged within its walls. Our members, spanning across
              multiple generations, contribute to a thriving network that
              supports not only each other but also the ongoing growth and
              success of the school. Through various initiatives, events, and
              mentorship programs, the association continues to play a vital
              role in nurturing the next generation of leaders, while also
              providing a platform for alumni to reconnect, share experiences,
              and give back to the institution that has played such a
              significant role in their lives.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

export default AboutCard