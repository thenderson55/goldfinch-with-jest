async function handleLogout(req, res) {
  const returnTo = encodeURI(`${window.document.location.origin}`);
  res.redirect(
    // `https://${process.env.AUTH0_ISSUER}/v2/logout?federated&returnTo=${returnTo}`
    `${process.env.AUTH0_ISSUER}/v2/logout?returnTo=${returnTo}`
    // `https://${process.env.AUTH0_ISSUER}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${returnTo}`
    // `https://${process.env.AUTH0_ISSUER}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${returnTo}`
  );

  // res.redirect(returnTo);
}

export default async function logout(req, res) {
  try {
    await handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
