import PostCardThree from "@/components/user/PostCardThree/PostCardThree";
import { TPost } from "@/types/post";
import { useEffect, useState } from "react";
import SeeMoreSection from "./Components/SeeMoreSection";
import ShareOptions from "./Components/ShareOptions";
import PaginatePosts from "./Components/PaginatePosts";

const SinglePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("./posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <div className="large__container relative pt-6 pb-10 xl:pt-12">
                <div>
                    {posts.slice(0, 1).map((post: TPost) => (
                        <PostCardThree key={post.slug} post={post} />
                    ))}
                </div>

                <div className="post__content lg:max-w-[700px] lg:w-full lg:mx-auto pt-10">
                    <p>
                        Sed ut iis bonis erigimur, quae expectamus, sic laetamur
                        iis, quae recordamur. Athoc in eo M. Quid de Platone aut
                        de Democrito loquar. Quae in controversiam veniunt, de
                        iis, si placet, disseramus. Iam quae corporis sunt, ea
                        nec auctoritatem cum animi partibus, comparandam et
                        cognitionem habent faciliorem. Quam ob rem tandem,
                        inquit, non satisfacit. Isto modo ne improbos quidem, si
                        essent boni viri. Qui autem esse poteris, nisi te amor
                        ipse ceperit. Utilitatis causa amicitia est quaesita.
                    </p>

                    <p>
                        Quos nisi redarguimus, omnis virtus, omne decus, omnis
                        vera laus deserenda est. Sed eum qui audiebant, quoad
                        poterant, defendebant sententiam suam. Fatebuntur Stoici
                        haec omnia dicta esse praeclare, neque eam causam Zenoni
                        desciscendi fuisse.
                    </p>

                    {/* <div className="post__gallery post__gallery__12">
                        <img src="./9.jpg" alt="" />
                        <img src="./10.jpg" alt="" />
                    </div> */}

                    <div className="post__gallery__lg post__gallery__12">
                        <div>
                            <img src="./9.jpg" alt="" />
                            <img src="./10.jpg" alt="" />
                        </div>
                    </div>

                    <p>
                        Quae quo sunt excelsiores, eo dant clariora indicia
                        naturae. Sed haec quidem liberius ab eo dicuntur et
                        saepius. Et ille ridens: Video, inquit, quid agas; Tum
                        ille timide vel potius verecunde: Facio, inquit. An hoc
                        usque quaque, aliter in vita? Unum nescio, quo modo
                        possit, si luxuriosus sit, finitas cupiditates habere.
                        Aliter enim explicari, quod quaeritur, non potest. Sed
                        haec quidem liberius ab eo dicuntur et saepius.
                    </p>

                    <p>
                        Sed quid tibi dicendum sit oblitus es. Haec et tu ita
                        posuisti, et verba vestra sunt. Contemnit enim
                        disserendi elegantiam, confuse loquitur. Bona autem
                        corporis huic sunt, quod posterius posui, similiora.
                        Quod cum ita sit, perspicuum est omnis rectas res atque
                        laudabilis eo referri, ut cum voluptate vivatur.
                    </p>

                    <p>
                        Quasi vero aut concedatur in omnibus stultis aeque magna
                        esse vitia, et eadem inbecillitate et inconstantia L.
                        Levatio igitur vitiorum magna fit in iis, qui habent ad
                        virtutem progressionis aliquantum. Tertium autem omnibus
                        aut maximis rebus iis, quae secundum naturam sint,
                        fruentem vivere. Materiam vero rerum et copiam apud hos
                        exilem, apud illos uberrimam reperiemus. Atque his de
                        rebus et splendida est eorum et illustris oratio. Age,
                        inquies, ista parva sunt. Ad eos igitur converte te,
                        quaeso. Haec para/doca illi, nos admirabilia dicamus.
                        Universa enim illorum ratione cum tota vestra
                        confligendum puto.
                    </p>

                    {/* share content will be add */}

                    <p>
                        Quos nisi redarguimus, omnis virtus, omne decus, omnis
                        vera laus deserenda est. Sed eum qui audiebant, quoad
                        poterant, defendebant sententiam suam. Fatebuntur Stoici
                        haec omnia dicta esse praeclare, neque eam causam Zenoni
                        desciscendi fuisse. Quis est autem dignus nomine
                        hominis, qui unum diem totum velit esse in genere isto
                        voluptatis. Ad eos igitur convert te, quaeso. Duo Reges:
                        constructio interrete. An est aliquid per se ipsum
                        flagitiosum, etiamsi nulla comitetur infamia. Quid ad
                        utilitatem tantae pecuniae? Duo enim genera quae erant,
                        fecit tria. Et quod est munus, quod opus sapientiae? Sed
                        in rebus apertissimis nimium longi sumus. Quasi vero aut
                        concedatur in omnibus stultis aeque magna esse vitia, et
                        eadem inbecillitate et inconstantia L. Levatio igitur
                        vitiorum magna fit in iis, qui habent ad virtutem
                        progressionis aliquantum. Tertium autem omnibus aut
                        maximis rebus iis, quae secundum naturam sint, fruentem
                        vivere. Materiam vero rerum et copiam apud hos exilem,
                        apud illos uberrimam reperiemus. Atque his de rebus et
                        splendida est eorum et illustris oratio. Age, inquies,
                        ista parva sunt. Ad eos igitur converte te, quaeso. Haec
                        para/doca illi, nos admirabilia dicamus. Universa enim
                        illorum ratione cum tota vestra confligendum puto.
                    </p>
                </div>
            </div>

            <ShareOptions />

            <PaginatePosts />

            <SeeMoreSection />
        </div>
    );
};

export default SinglePost;
