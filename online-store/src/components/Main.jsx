import Card from './Card'

const Main = ({data}) => {
    return (
        <main className='container my-2 py-5'>
            <div className="row gx-3 gy-5">
                {data.map(cardData => 
                    // <Link to="/productDetails" key={cardData.id}>
                    // <RouterProvider router={router}>
                        <Card 
                            key={cardData.id}
                            id={cardData.id}
                            imageUrl={cardData.image}
                            title={cardData.title}
                            price={cardData.price}
                        />
                    // </RouterProvider>
                    // </Link>
                )}
            </div>
        </main>
    )
}

export default Main

{/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Booking />} />
        <Route path='/api' element={<API />} />
        <Route path='/todo' element={<Todo />}/>
        <Route path='/about' element={<About />}/>    {/* Routers are used to traverse between multiple pages
        <Route path='/login' element={<h1>Login Page</h1>}/>
      </Routes>
    </BrowserRouter> */}