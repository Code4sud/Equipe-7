type SwitcherProps = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

const Switcher = ({isChecked, setIsChecked}: SwitcherProps) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-6 w-12 rounded-full ${
              isChecked ? 'bg-green-600' : 'bg-black/25'
            }`}
          ></div>
          <div
            className={`absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Switcher
