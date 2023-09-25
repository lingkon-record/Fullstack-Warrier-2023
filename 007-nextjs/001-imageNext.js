// Link : https://nextjs.org/docs/pages/api-reference/components/image

// import - next/image
// 01 :  <Image />
import Image from 'next/image'
 
export default function Page() {
  return (
  <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    )
}

// 02 : style={imageStyle}
const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
 
export default function ProfileImage() {
  return <Image src="..." style={imageStyle} />
}


// 03 : 
