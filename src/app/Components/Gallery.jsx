import Image from "next/image"
import "./css/Gallery.css"

export default function Gallery() {
    return (
        <>
            <div className="gallery">
                <h2>Gallery</h2>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="/Gallery/1.jpg" alt="Image 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/2.jpg" alt="Image 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/3.jpg" alt="Image 3"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/4.jpg" alt="Image 4"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/5.jpg" height={300} width={400} alt="Image 4"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}