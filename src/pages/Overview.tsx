import { Card } from '../components'

const Overview = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-5'>
        <Card title='Total Revenue' value='$12045' />
        <Card title='Total Transactions' value='$12045' />
      </div>
      <Card title='Chart' value='1'/>
    </div>
  )
}

export default Overview
