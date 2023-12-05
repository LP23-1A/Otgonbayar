const trendingdata = [
    {
      img:"https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot21-1920x1080-be60aaa26ed9ec18a3761dbef7591fae.jpg?resize=1&w=1920",
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing"
    },
]

const Trending = () => {
  return( 
              trendingdata.map((props) => {
                  return (
                      <div className=" p-[28px] flex items-end w-[289px] rounded-[12px] h-[320px] bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
                          <div className="w-[230px]">
                              <button className=" bg-blue-600 text-white rounded-[8px] p-[4px] rounded-mdls">{props.category}</button>
                              <p className="text-[18px] text-white">{props.text}</p>
                          </div>
                      </div>
                  )
              })
  )}
export default Trending