function status(request, response) {
  return response.status(200).json({ teste: "teste" });
}

export default status;
