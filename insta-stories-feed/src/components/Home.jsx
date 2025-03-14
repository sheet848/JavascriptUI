import React, { useState } from 'react'
import categoryItems from '../constants/categories';
import CreditsComponent from './CreditsComponent';
import { useHistory } from 'react-router-dom'

const Home = () => {

    const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
    //const history = useHistory();

    // function renderToStory

    function redirectToStory(categoryItem) {
      //history.push(`/story/${categoryItem.name.toLowerCase()}`);
    }

    //renderCategoryItem()
    function renderCategoryItem() {
        return categoryItems.map((categoryItem) => {
            return (
                <>
                <div
          className="flex justify-center items-center flex-col mt-4 cursor-pointer"
          key={categoryItem.name + categoryItem.iconName}
          onClick={() => redirectToStory(categoryItem)}
        >
          <div className="category-outer-circle flex justify-center items-center">
            <div className="category-inner-circle flex justify-center items-center">
              <i className="material-icons text-4xl">{categoryItem.iconName}</i>
            </div>
          </div>
          <div className="font-bold">{categoryItem.name}</div>
        </div>
                </>
            )
        })
    }

  return (
    <>
        <div>
      <div className="header text-white flex justify-center items-center text-3xl font-bold">
        <div>Stories Feed</div>
        <div
          className="fixed top-3 right-4 cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
          <i className="material-icons text-4xl">info</i>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 w-screen flex justify-center items-center max-w-screen-md">
          {renderCategoryItem()}
        </div>
      </div>
      {isCreditsPopUpOpen ? (
        <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />
      ) : null}
    </div>
    </>
  )
}

export default Home