import Container from "../Container"
import Logo from './Logo'

export default function Navbar () {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div 
           className="
              py-4
              border-b-[1px]
           "
        >
            <Container>
                    <div
                        className=" 
                            flex
                            flex-row
                            item-center
                            justify-between
                            gap-4
                            md:gap-0
                        "
                    >
                        <Logo />
                    </div>
            </Container>    
        </div>
    </div>
  )
}

