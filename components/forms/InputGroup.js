export default function InputGroup() {
  return (
    <div className='flex flex-wrap justify-center items-center bg-transparent'>
      <input
        type='text'
        className='h-10 input-group-padding font-md text-slate-500 border-none border-radius-sm input-group-input'
        placeholder='Search Music Here..' />

      <button className="flex justify-center items-center h-10 input-group-btn">
        <i className="material-icons">search</i>
      </button>
    </div>
  )
}
