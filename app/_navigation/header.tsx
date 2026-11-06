
const Header = () => {
  return (
    <nav className="
      flex justify-between py-2.5 px-5
      border-b w-full fixed left-0 right-0 top-0 z-20
      supports-backdrop-blur:bg-background/80 backdrop-blur-sm" >
      <div>
        <h1>Website relaunch</h1>
      </div>
      <div className="flex items-center gap-2">
         <h1>Switch theme</h1>
         <span>Log In</span>
         <span>sign up</span>
      </div>
    </nav>
  )
}

export { Header }

