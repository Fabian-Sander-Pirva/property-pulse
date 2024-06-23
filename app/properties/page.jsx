import Link from 'next/link';

const propertiesPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>
      <Link href='/properties/add'>create Property</Link>
    </div>
  )
}

export default propertiesPage