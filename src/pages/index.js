import { Fragment, useState } from "react";
import Image from "next/image";
import Modal from "../components/Modal";

export default function Home() {
  let collection = require("../utils/data.json");
  let comments = collection.comments;
  let currentUser = collection.currentUser;
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      {comments.map((item, index) => {
        return (
          <section key={index} className="comments">
            <div className="comments__container">
              <div className="comments__container-post">
                <div className="comments__container-post-header">
                  <Image
                    className="comments__container-post-header-img"
                    src={item.user.image.png}
                    height={30}
                    width={30}
                  />
                  <p className="comments__container-post-header-username">
                    {item.user.username}
                  </p>
                  {item.user.username === currentUser.id && (
                    <span className="comments__you">you</span>
                  )}
                  <p className="comments__container-post-header-createat">
                    {item.createdAt}
                  </p>
                </div>
                <p className="comments__container-post-message">
                  {item.content}
                </p>
              </div>
              <div className="comments__container-score">
                <button className="comments__container-score-btn">+</button>
                <p className="comments__container-score-number">{item.score}</p>
                <button className="comments__container-score-btn">-</button>
              </div>
              <div className="comments__container-reply">
                <Image
                  className="comments__container-reply-svg"
                  src="/images/icon-reply.svg"
                  height={13}
                  width={13}
                />
                <button className="comments__container-reply-btn">Reply</button>
              </div>
            </div>
            {/* VALIDACION Y CARGA DE RESPUESTAS */}
            {item.replies.length > 0 && (
              <section className="comments__replies">
                {item.replies.map((data, key) => {
                  return (
                    <div key={key} className="comments__replies-container">
                      <div className="comments__container-post">
                        <div className="comments__container-post-header">
                          <Image
                            className="comments__container-post-header-img"
                            src={data.user.image.png}
                            height={30}
                            width={30}
                          />
                          <p className="comments__container-post-header-username">
                            {data.user.username}
                          </p>
                          {data.user.username === currentUser.username && (
                            <span className="comments__you">you</span>
                          )}

                          <p className="comments__container-post-header-createat">
                            {data.createdAt}
                          </p>
                        </div>
                        <p className="comments__container-post-message">
                          <span className="comments__container-post-message replyingTo">
                            @{data.replyingTo}{" "}
                          </span>
                          {data.content}
                        </p>
                      </div>
                      <div className="comments__container-score">
                        <button className="comments__container-score-btn">
                          +
                        </button>
                        <p className="comments__container-score-number">
                          {data.score}
                        </p>
                        <button className="comments__container-score-btn">
                          -
                        </button>
                      </div>
                      {data.user.username === currentUser.username ? (
                        <div className="comments__container-userAction">
                          <div
                            className="comments__container-userAction-delete"
                            onClick={() => setModal(true)}
                          >
                            <Image
                              className="comments__container-userAction-delete-svg"
                              src="/images/icon-delete.svg"
                              height={13}
                              width={13}
                            />
                            <span className="comments__container-userAction-delete-btn">
                              Delete
                            </span>
                          </div>
                          <div className="comments__container-userAction-edit">
                            <Image
                              className="comments__container-userAction-edit-svg"
                              src="/images/icon-edit.svg"
                              height={13}
                              width={13}
                            />
                            <span className="comments__container-userAction-edit-btn">
                              Edit
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="comments__container-reply">
                          <Image
                            className="comments__container-reply-svg"
                            src="/images/icon-reply.svg"
                            height={13}
                            width={13}
                          />
                          <button className="comments__container-reply-btn">
                            Reply
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </section>
            )}
          </section>
        );
      })}
      {/* NUEVO COMENTARIO */}
      <section className="comments__new-commnet">
        <textarea
          className="comments__new-commnet-new-text"
          name="textarea"
          placeholder="Add a comment..."
        ></textarea>
        <div className="comments__new-commnet-new-img">
          <Image
            src="/images/avatars/image-juliusomo.png"
            height={40}
            width={40}
          />
        </div>
        <button className="comments__new-commnet-send">Send</button>
      </section>

      {/* MODAL */}
      {modal && <Modal setModal={setModal} state={modal} />}
    </Fragment>
  );
}
