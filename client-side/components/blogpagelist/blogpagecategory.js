function Blogpagecategory(props) {
    const { setTagFunc } = props;
    return (
        <>
            <div className="category-container">
                <button style={{ backgroundColor: 'rgb(85, 88, 85)' }} onClick={() => { setTagFunc('all') }}>Esc</button>
                <button style={{ backgroundColor: 'rgb(254, 71, 38)' }} onClick={() => { setTagFunc('html') }}>Html</button>
                <button style={{ backgroundColor: 'rgb(0, 141, 242)' }} onClick={() => { setTagFunc('css') }}>Css3</button>
                <button style={{ backgroundColor: 'rgb(242, 0, 218)' }} onClick={() => { setTagFunc('design') }}>Design</button>
                <button style={{ backgroundColor: '#f6bf00', color: '#333' }} onClick={() => { setTagFunc('javascript') }}>JavaScript</button>
                <button style={{ backgroundColor: 'rgb(0, 186, 233)' }} onClick={() => { setTagFunc('reactjs') }}>ReactJS</button>
                <button style={{ backgroundColor: '#444' }} onClick={() => { setTagFunc('nextjs') }}>NextJS</button>
                <button style={{ backgroundColor: 'green' }} onClick={() => { setTagFunc('Nodejs') }}>NodeJS</button>
                <button style={{ backgroundColor: 'rgb(106, 0, 255)' }} onClick={() => { setTagFunc('php') }}>Php</button>
                <button style={{ backgroundColor: 'green' }} onClick={() => { setTagFunc('mongodb') }}>MongoDB</button>
                <button style={{ backgroundColor: '#4479a1' }} onClick={() => { setTagFunc('mysql') }}>Mysql</button>
                <button style={{ backgroundColor: 'rgb(106, 0, 255)' }} onClick={() => { setTagFunc('graphql') }}>GraphQL</button>
                <button style={{ backgroundColor: '#f65400' }} onClick={() => { setTagFunc('apache') }}>Apache</button>
                <button style={{ backgroundColor: '#21a600' }} onClick={() => { setTagFunc('nginx') }}>Nginx</button>
                <button style={{ backgroundColor: '#f6bf00' }} onClick={() => { setTagFunc('linux') }}>Linux</button>
                <button style={{ backgroundColor: 'rgb(1, 184, 240)' }} onClick={() => { setTagFunc('docker') }}>Docker</button>
                <button style={{ backgroundColor: 'rgb(240, 98, 1)' }} onClick={() => { setTagFunc('other') }}>Other</button>
            </div>
            <style jsx>{`
    
            .category-container {
                width:100vw;
                height:auto;
                background-color:#ff8400;
                box-shadow:0 0.1em 0.2em 0.05em #333;
                margin-bottom:1em;
                padding:1em 1em;
                display:flex;
                justify-content:space-around;
                flex-wrap:wrap;
                box-sizing: border-box;
                cursor:pointer;
            }
            .category-container > button {
                background-color:#444;
                color:white;
                padding:1em;
                margin:0.5em;
                border-radius:0.3em;
                box-shadow:inset 0 1px 0.1em 0.1em #444,inset 0 -2px 0.1em 0.1em #444,0 2px 2px 1px #333;
                cursor:pointer;
                transition:0.15s all linear;
                font-weight:bold;
            }
            .category-container > button:hover {
                transform:scale(1.2);
            }
            .category-container > button:active {
                transform:scale(1);
                box-shadow:inset 0 1px 10px 1px #444,inset 0 -2px 1px 1px #444,0 2px 2px 1px #333;
            }
            
            
            
            `}</style>
        </>
    )
}
export default Blogpagecategory;