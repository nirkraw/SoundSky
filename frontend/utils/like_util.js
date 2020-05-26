export const createLike = (like) => {
  return $.ajax({
    method: "POST",
    url: `/api/likes`,
    data: {like}
  });
};

export const destroyLike = (likeId) => {
  return $.ajax({
    method: "DELETE",
    url: '/api/likes',
    data: {likeId}
  });
};
