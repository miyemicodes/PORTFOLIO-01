import { useEffect, useState } from "react";
import Introduction from "./Components/Introduction";
import Details from "./Components/Details";

function App() {
	{
		/**
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
    */
	}

	return (
		<>
			<section>
				<div className="w-screen relative md:h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-800 mix-blend-difference">
					{/**
            *   <div
            className=" absolute w-60 h-60 blur-lg pointer-events-none z-50 torchlight"
            style={{
              top: mousePosition.y,
              left: mousePosition.x,
            }}
            ></div>
          */}

					<Introduction />
					<Details />
				</div>
			</section>
		</>
	);
}

export default App;
