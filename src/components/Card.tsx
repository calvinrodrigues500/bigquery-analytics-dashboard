interface Props {
  title: string | null;
  value: string
}

const Card = ({ title, value }: Props) => {
  return (
    <div className='bg-white p-5 rounded flex flex-col gap-5 w-64 '>
      <h5 className='text-md font-semibold'>{title}</h5>
      <div>
        <h2 className='font-bold text-2xl'>{value}</h2>
      </div>
    </div>
  )
}

export default Card
