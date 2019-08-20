import React, { Fragment, Component } from "react";



const Stars = () => {
return (
<div class="rating_block">
  <input name="rating" value="5" id="rating_5" type="radio" />
  <label for="rating_5" class="label_rating"></label>
 
  <input name="rating" value="4" id="rating_4" type="radio" />
  <label for="rating_4" class="label_rating"></label>
 
  <input name="rating" value="3" id="rating_3" type="radio" />
  <label for="rating_3" class="label_rating"></label>
 
  <input name="rating" value="2" id="rating_2" type="radio" />
  <label for="rating_2" class="label_rating"></label>
 
  <input name="rating" value="1" id="rating_1" type="radio" />
  <label for="rating_1" class="label_rating"></label>
</div>
)
}


export default Stars;