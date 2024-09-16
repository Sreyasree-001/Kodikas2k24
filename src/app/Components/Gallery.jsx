import Image from "next/image"
import "./css/Gallery.css"

export default function Gallery() {
    return (
        <>
            <div id="gallery" className="gallery">
                <div className="title">
                    <h2>Gallery</h2>
                </div>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="/Gallery/1.png" alt="Image 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/3.png" alt="Image 3"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/4.png" alt="Image 4"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/5.png" alt="Image 5"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/6.png" alt="Image 5"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/7.png" alt="Image 5"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/Gallery/8.png" alt="Image 5"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teaser">
                <video autoPlay muted preload loop>
                    <source src="/Gallery/teaser.mp4"></source>
                </video>
                <div className="title">
                    <h2>Trailer</h2>
                </div>
            </div>
        </>
    )
}