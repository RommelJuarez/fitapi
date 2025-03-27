const routes = require('express').Router();
const passport = require('../oauth/auth');

routes.get("/github", (req, res, next) => {
    try {
        passport.authenticate("github")(req, res, next);
    } catch (error) {
        next(error);
    }
});

routes.get('/auth/github/callback',
    (req, res, next) => {
        passport.authenticate('github', { failureRedirect: '/api-docs', session: true }, (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ error: "Authentication failed" });
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                req.session.user = user;
                res.redirect('/');
            });
        })(req, res, next);
    }
);

routes.get("/logout", (req, res, next) => {
    try {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    } catch (error) {
        next(error);
    }
});


routes.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "An error occurred on the server" });
});

module.exports = routes;
