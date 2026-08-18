import {
  Z,
  a,
  autosize_esm_default,
  c,
  d,
  f,
  h as h2,
  i,
  l,
  m,
  markedHighlight,
  o,
  p,
  r,
  require_ReCaptcha,
  s,
  useDebounceFn,
  useEventListener,
  useNow,
  useScriptTag,
  useStorage,
  useStyleTag,
  watchImmediate
} from "./chunk-QCDEUH2Y.js";
import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  resolveComponent,
  toDisplayString,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-IGPK6NSI.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/@waline/client/dist/slim.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());
var U = /* @__PURE__ */ new Set([`nick`, `mail`, `link`]);
var W = (e) => e.filter((e2) => U.has(e2));
var G = [`//unpkg.com/@waline/emojis@1.1.0/weibo`];
var me = [`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`, `//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`, `//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`, `//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`];
var K = (e) => new Promise((t, n) => {
  if (e.size > 128 * 1e3) {
    n(Error(`File too large! File size limit 128KB`));
    return;
  }
  let r2 = new FileReader();
  r2.readAsDataURL(e), r2.addEventListener(`load`, () => {
    t(r2.result);
  }), r2.addEventListener(`error`, n);
});
var he = (e) => e ? `<p class="wl-tex">TeX is not available in preview</p>` : `<span class="wl-tex">TeX is not available in preview</span>`;
var q = (e) => {
  let t = (t2, n = {}) => fetch(`https://api.giphy.com/v1/gifs/${t2}?${new URLSearchParams({ lang: e, limit: `20`, rating: `g`, api_key: `6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`, ...n }).toString()}`).then((e2) => e2.json()).then(({ data: e2 }) => e2.map((e3) => ({ title: e3.title, src: e3.images.downsized_medium.url })));
  return { search: (e2) => t(`search`, { q: e2, offset: `0` }), default: () => t(`trending`, {}), more: (e2, n = 0) => t(`search`, { q: e2, offset: n.toString() }) };
};
var ge = RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF\u0400-\u04FF]+|\w+/u.source}|${/</u.source})|((?:${/(?:^|\s)\/\/(.+?)$/gmu.source})|(?:${/\/\*([\S\s]*?)\*\//gmu.source}))`, `gmiu`);
var J = [`23AC69`, `91C132`, `F19726`, `E8552D`, `1AAB8E`, `E1147F`, `2980C1`, `1BA1E6`, `9FA0A0`, `F19726`, `E30B20`, `E30B20`, `A3338B`];
var Y = {};
var X = (e) => {
  let t = 0;
  return e.replace(ge, (e2, n, r2) => {
    if (r2) return `<span style="color: slategray">${r2}</span>`;
    if (n === `<`) return `&lt;`;
    let i2;
    Y[n] ? i2 = Y[n] : (i2 = J[t], Y[n] = i2);
    let a2 = `<span style="color: #${i2}">${n}</span>`;
    return t = ++t % J.length, a2;
  });
};
var _e = `nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies`.split(`.`);
var Z2 = (e) => Object.fromEntries(e.map((e2, t) => [_e[t], e2]));
var ve = Z2(`Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare`.split(`,`));
var ye = Z2(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments`.split(`,`));
var be = Z2(`Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!
 El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios`.split(`,`));
var xe = Z2(`Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires`.split(`,`));
var Se = Z2(`Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!
 Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda`.split(`,`));
var Ce = Z2(`Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!
 Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti`.split(`,`));
var we = Z2(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する`.split(`,`));
var Te = Z2(`닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!
현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독`.split(`,`));
var Ee = Z2(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários`.split(`(`));
var De = Z2(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев`.split(`(`));
var Oe = Z2(`Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn`.split(`,`));
var ke = Z2(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复`.split(`,`));
var Q = { zh: ke, "zh-cn": ke, "zh-tw": Z2(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆`.split(`,`)), en: ye, "en-us": ye, fr: xe, "fr-fr": xe, id: Se, "id-id": Se, it: Ce, "it-it": Ce, jp: we, "jp-jp": we, ko: Te, "ko-kr": Te, "pt-br": Ee, ru: De, "ru-ru": De, vi: Oe, "vi-vn": Oe, de: ve, es: be, "es-mx": be };
var Ae = (e) => Q[e.toLowerCase()] ?? Q[`en-us`];
var je = (e) => Object.keys(Q).includes(e.toLowerCase()) ? e : `en-US`;
var Me = { latest: `insertedAt_desc`, oldest: `insertedAt_asc`, hottest: `like_desc` };
var Ne = Object.keys(Me);
var Pe = Symbol(`waline-config`);
var Fe = (e) => {
  try {
    return decodeURI(e);
  } catch {
    return e;
  }
};
var Ie = (e = ``) => e.replace(/\/$/u, ``);
var Le = (e) => /^(https?:)?\/\//u.test(e);
var Re = (e) => {
  let t = Ie(e);
  return Le(t) ? t : `https://${t}`;
};
var ze = (e) => Array.isArray(e) ? e : typeof e == `number` && e > 0 ? [0, e] : false;
var Be = (e, t) => e == null || e === true ? t : e === false ? null : e;
var Ve = ({ serverURL: e, path: t = location.pathname, lang: n = typeof navigator > `u` ? `en-US` : navigator.language, locale: r2, meta: i2 = [`nick`, `mail`, `link`], requiredMeta: a2 = [], dark: o2 = false, pageSize: s2 = 10, wordLimit: c2, noCopyright: l2 = false, noRss: u = false, login: d2 = `enable`, recaptchaV3Key: f2 = ``, turnstileKey: p2 = ``, commentSorting: m2 = `latest`, emoji: h3 = G, imageUploader: g, highlighter: _, texRenderer: v, search: y, reaction: b, ...x }) => ({ serverURL: Re(e), path: Fe(t), lang: je(n), locale: { ...Ae(je(n)), ...typeof r2 == `object` ? r2 : {} }, wordLimit: ze(c2), meta: W(i2), requiredMeta: W(a2), dark: o2, pageSize: s2, commentSorting: m2, login: d2, noCopyright: l2, noRss: u, recaptchaV3Key: f2, turnstileKey: p2, ...x, reaction: b === true ? me : b || null, imageUploader: Be(g, K), highlighter: Be(_, X), texRenderer: Be(v, he), emoji: Be(h3, G), search: Be(y, q(n)) });
var $ = (e) => typeof e == `string`;
var He = `{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}`;
var Ue = (e) => $(e) ? e === `auto` ? `@media(prefers-color-scheme:dark){body${He}}` : `${e}${He}` : e === true ? `:root${He}` : ``;
var We = (e, t) => {
  let n = e.toString();
  for (; n.length < t; ) n = `0${n}`;
  return n;
};
var Ge = (e) => {
  let t = We(e.getDate(), 2), n = We(e.getMonth() + 1, 2);
  return `${We(e.getFullYear(), 2)}-${n}-${t}`;
};
var Ke = (e, t, n) => {
  if (!e) return ``;
  let r2 = $(e) ? new Date(e.includes(` `) ? e.replaceAll(`-`, `/`) : e) : e, i2 = t.getTime() - r2.getTime(), a2 = Math.floor(i2 / (24 * 3600 * 1e3));
  if (a2 === 0) {
    let e2 = i2 % (24 * 3600 * 1e3), t2 = Math.floor(e2 / (3600 * 1e3));
    if (t2 === 0) {
      let t3 = e2 % (3600 * 1e3), r3 = Math.floor(t3 / (60 * 1e3));
      if (r3 === 0) {
        let e3 = t3 % (60 * 1e3);
        return `${Math.round(e3 / 1e3)} ${n.seconds}`;
      }
      return `${r3} ${n.minutes}`;
    }
    return `${t2} ${n.hours}`;
  }
  return a2 < 0 ? n.now : a2 < 8 ? `${a2} ${n.days}` : Ge(r2);
};
var qe = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u;
var Je = (e) => qe.test(e);
var Ye = useStorage(`WALINE_EMOJI`, {});
var Xe = (e) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e);
var Ze = (e) => {
  let t = Xe(e);
  if (t) {
    let t2 = Ye.value[e];
    if (t2) return Promise.resolve(t2);
  }
  return fetch(`${e}/info.json`).then((e2) => e2.json()).then((n) => {
    let r2 = { folder: e, ...n };
    return t && (Ye.value[e] = r2), r2;
  });
};
var Qe = (e, t = ``, n = ``, r2 = ``) => `${t ? `${t}/` : ``}${n}${e}${r2 ? `.${r2}` : ``}`;
var $e = (e) => Promise.all(e ? e.map((e2) => $(e2) ? Ze(Ie(e2)) : Promise.resolve(e2)) : []).then((e2) => {
  let t = { tabs: [], map: {} };
  return e2.forEach((e3) => {
    let { name: n, folder: r2, icon: i2, prefix: a2 = ``, type: o2, items: s2 } = e3;
    t.tabs.push({ name: n, icon: Qe(i2, r2, a2, o2), items: s2.map((e4) => {
      let n2 = `${a2}${e4}`;
      return t.map[n2] = Qe(e4, r2, a2, o2), n2;
    }) });
  }), t;
});
var et = (e) => {
  e.name !== `AbortError` && console.error(e.message);
};
var tt = (e) => e instanceof HTMLElement ? e : $(e) ? document.querySelector(e) : null;
var nt = (e) => {
  let t = [...e].find((e2) => e2.type.includes(`image`));
  return t ? t.getAsFile() : null;
};
var rt = /\$.*?\$/u;
var it = /^\$(.*?)\$/u;
var at = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/u;
var ot = (e) => [{ name: `blockMath`, level: `block`, tokenizer(t) {
  let n = at.exec(t);
  if (n != null) return { type: `html`, raw: n[0], text: e(true, n[1]) };
} }, { name: `inlineMath`, level: `inline`, start(e2) {
  let t = e2.search(rt);
  return t === -1 ? e2.length : t;
}, tokenizer(t) {
  let n = it.exec(t);
  if (n != null) return { type: `html`, raw: n[0], text: e(false, n[1]) };
} }];
var st = (e = ``, t = {}) => e.replaceAll(/:(.+?):/gu, (e2, n) => t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e2);
var ct = (e, { emojiMap: t, highlighter: n, texRenderer: r2 }) => {
  let i2 = new Z();
  if (i2.setOptions({ breaks: true }), n && i2.use(markedHighlight({ highlight: n })), r2) {
    let e2 = ot(r2);
    i2.use({ extensions: e2 });
  }
  return i2.parse(st(e, t));
};
var lt = (e) => {
  let { path: t } = e.dataset;
  return (t == null ? void 0 : t.length) ? t : null;
};
var ut = (e) => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var dt = (e) => e.match(/[\u4E00-\u9FD5]/gu);
var ft = (e) => {
  var _a, _b;
  return (((_a = ut(e)) == null ? void 0 : _a.reduce((e2, t) => e2 + ([``, `,`, `.`].includes(t.trim()) ? 0 : t.trim().split(/\s+/u).length), 0)) ?? 0) + (((_b = dt(e)) == null ? void 0 : _b.length) ?? 0);
};
var pt = async () => {
  let { userAgentData: e } = navigator, t = navigator.userAgent;
  if ((e == null ? void 0 : e.platform) !== `Windows`) return t;
  let { platformVersion: n } = await e.getHighEntropyValues([`platformVersion`]);
  return n && Number.parseInt(n.split(`.`)[0], 10) >= 13 && (t = t.replace(`Windows NT 10.0`, `Windows NT 11.0`)), t;
};
var mt = ({ serverURL: e, path: t = window.location.pathname, selector: r2 = `.waline-comment-count`, lang: i2 = navigator.language }) => {
  let a2 = new AbortController(), o2 = document.querySelectorAll(r2);
  return o2.length > 0 && l({ serverURL: Re(e), paths: Array.from(o2, (e2) => Fe(lt(e2) ?? t)), lang: i2, signal: a2.signal }).then((e2) => {
    o2.forEach((t2, n) => {
      t2.textContent = e2[n].toString();
    });
  }).catch(et), a2.abort.bind(a2);
};
var ht = () => useStorage(`WALINE_USER_META`, { nick: ``, mail: ``, link: `` });
var gt = () => useStorage(`WALINE_COMMENT_BOX_EDITOR`, ``);
var _t = useStorage(`WALINE_LIKE`, []);
var vt = () => _t;
var yt = useStorage(`WALINE_REACTION`, {});
var bt = () => yt;
var xt = {};
var St = (e) => {
  let t = xt[e] ?? (xt[e] = (0, import_recaptcha_v3.load)(e, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (e2) => t.then((t2) => t2.execute(e2)) };
};
var Ct = (e) => ({ execute: async (t) => {
  let { load: n } = useScriptTag(`https://challenges.cloudflare.com/turnstile/v0/api.js`, void 0, { async: false });
  await n();
  let { turnstile: r2 } = window;
  return new Promise((n2) => {
    r2 == null ? void 0 : r2.ready(() => {
      r2.render(`.wl-captcha-container`, { sitekey: e, action: t, size: `compact`, callback: n2 });
    });
  });
} });
var wt = useStorage(`WALINE_USER`, {});
var Tt = () => wt;
var Et = `3.15.2`;
var Dt = ({ size: e }) => h(`svg`, { class: `wl-close-icon`, viewBox: `0 0 1024 1024`, width: e, height: e }, [h(`path`, { d: `M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`, fill: `currentColor` }), h(`path`, { d: `m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`, fill: `#888` })]);
var Ot = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`, fill: `red` }));
var kt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`, fill: `currentColor` }));
var At = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`, fill: `currentColor` }), h(`path`, { d: `M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`, fill: `currentColor` })]);
var jt = ({ active: e = false }) => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e ? `` : `M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`}`, fill: e ? `red` : `currentColor` })]);
var Mt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`, fill: `currentColor` }), h(`path`, { d: `M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`, fill: `currentColor` })]);
var Nt = () => h(`svg`, { width: `16`, height: `16`, ariaHidden: `true` }, h(`path`, { d: `M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`, fill: `currentColor` }));
var Pt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`, fill: `currentColor` }));
var Ft = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`, fill: `currentColor` }));
var It = () => h(`svg`, { class: `verified-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, h(`path`, { d: `m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`, fill: `#27ae60` }));
var Lt = () => h(`svg`, { class: `administrator-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, [h(`path`, { d: `M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z`, fill: `#f59831` })]);
var Rt = ({ size: e = 100 }) => h(`svg`, { width: e, height: e, viewBox: `0 0 100 100`, preserveAspectRatio: `xMidYMid` }, h(`circle`, { cx: 50, cy: 50, fill: `none`, stroke: `currentColor`, strokeWidth: `4`, r: `40`, "stroke-dasharray": `85 30` }, h(`animateTransform`, { attributeName: `transform`, type: `rotate`, repeatCount: `indefinite`, dur: `1s`, values: `0 50 50;360 50 50`, keyTimes: `0;1` })));
var zt = () => h(`svg`, { width: 24, height: 24, fill: `currentcolor`, viewBox: `0 0 24 24` }, [h(`path`, { style: `transform: translateY(0.5px)`, d: `M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z` }), h(`path`, { d: `M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z` })]);
var Bt = () => h(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24` }, h(`g`, { transform: `translate(0 -1028.4)` }, h(`g`, {}, [h(`path`, { d: `m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z`, fill: `#d35400` }), h(`path`, { d: `m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z`, transform: `translate(0 1028.4)`, fill: `#e67e22` }), h(`path`, { d: `m5 1034.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#d35400` }), h(`path`, { d: `m5 1033.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#ecf0f1` })])));
var Vt = () => h(`svg`, { fill: `currentColor`, width: `24`, height: `24`, viewBox: `-3 0 19 19`, class: `cf-icon-svg` }, h(`path`, { d: `M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z` }));
var Ht = { key: 0, class: `wl-reaction` };
var Ut = [`textContent`];
var Wt = { class: `wl-reaction-list` };
var Gt = [`onClick`];
var Kt = { class: `wl-reaction-img` };
var qt = [`src`, `alt`];
var Jt = [`textContent`];
var Yt = [`textContent`];
var Xt = defineComponent({ __name: `ArticleReaction`, setup(e) {
  let t = bt(), n = inject(Pe), i2 = ref(-1), a2 = ref([]), o2 = computed(() => n.value.locale), s2 = computed(() => {
    let { reaction: e2 } = n.value;
    return (e2 == null ? void 0 : e2.length) ? e2 : null;
  }), c2 = computed(() => {
    var _a;
    let { path: e2 } = n.value;
    return ((_a = s2.value) == null ? void 0 : _a.map((n2, r2) => ({ icon: n2, desc: o2.value[`reaction${r2}`], active: t.value[e2] === r2 }))) ?? null;
  }), u, d2 = async () => {
    let { serverURL: e2, lang: t2, path: i3 } = n.value;
    if (!s2.value) return;
    let o3 = new AbortController();
    u = o3.abort.bind(o3);
    let [c3] = await r({ serverURL: e2, lang: t2, paths: [i3], type: s2.value.map((e3, t3) => `reaction${t3}`), signal: o3.signal });
    a2.value = s2.value.map((e3, t3) => c3[`reaction${t3}`]);
  }, f2 = async (e2) => {
    if (i2.value !== -1) return;
    let { serverURL: r2, lang: o3, path: s3 } = n.value, c3 = t.value[s3];
    i2.value = e2, c3 != null && (await i({ serverURL: r2, lang: o3, path: s3, type: `reaction${c3}`, action: `desc` }), a2.value[c3] = Math.max(a2.value[c3] - 1, 0)), c3 !== e2 && (await i({ serverURL: r2, lang: o3, path: s3, type: `reaction${e2}` }), a2.value[e2] = (a2.value[e2] || 0) + 1), c3 === e2 ? delete t.value[s3] : t.value[s3] = e2, i2.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [n.value.serverURL, n.value.path], () => d2());
  }), onUnmounted(() => {
    u == null ? void 0 : u();
  }), (e2, t2) => c2.value ? (openBlock(), createElementBlock(`div`, Ht, [createBaseVNode(`div`, { class: `wl-reaction-title`, textContent: toDisplayString(o2.value.reactionTitle) }, null, 8, Ut), createBaseVNode(`ul`, Wt, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, ({ active: e3, icon: t3, desc: n2 }, r2) => (openBlock(), createElementBlock(`li`, { key: r2, class: normalizeClass([`wl-reaction-item`, { active: e3 }]), onClick: (e4) => f2(r2) }, [createBaseVNode(`div`, Kt, [createBaseVNode(`img`, { src: t3, alt: n2 }, null, 8, qt), i2.value === r2 ? (openBlock(), createBlock(unref(Rt), { key: 0, class: `wl-reaction-loading` })) : (openBlock(), createElementBlock(`div`, { key: 1, class: `wl-reaction-votes`, textContent: toDisplayString(a2.value[r2] || 0) }, null, 8, Jt))]), createBaseVNode(`div`, { class: `wl-reaction-text`, textContent: toDisplayString(n2) }, null, 8, Yt)], 10, Gt))), 128))])])) : createCommentVNode(`v-if`, true);
} });
var Zt = [`data-index`];
var Qt = [`src`, `title`, `onClick`];
var $t = defineComponent({ __name: `ImageWall`, props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: [`insert`], setup(e) {
  let t = null, n = useTemplateRef(`wall`), r2 = ref({}), i2 = ref([]), a2 = () => {
    let t2 = Math.floor((n.value.getBoundingClientRect().width + e.gap) / (e.columnWidth + e.gap));
    return t2 > 0 ? t2 : 1;
  }, o2 = (e2) => Array.from({ length: e2 }, () => []), s2 = async (t2) => {
    var _a;
    if (t2 >= e.items.length) return;
    await nextTick();
    let r3 = [...((_a = n.value) == null ? void 0 : _a.children) ?? []].reduce((e2, t3) => t3.getBoundingClientRect().height < e2.getBoundingClientRect().height ? t3 : e2);
    i2.value[Number(r3.dataset.index)].push(t2), await s2(t2 + 1);
  }, c2 = async (e2 = false) => {
    if (i2.value.length === a2() && !e2) return;
    i2.value = o2(a2());
    let { scrollY: t2 } = window;
    await s2(0), window.scrollTo({ top: t2 });
  }, l2 = (e2) => {
    r2.value[e2.target.src] = true;
  };
  return onMounted(() => {
    c2(true), t = new ResizeObserver(() => {
      c2();
    }), t.observe(n.value), watch(() => [e.items], () => {
      r2.value = {}, c2(true);
    }), watch(() => [e.columnWidth, e.gap], () => {
      c2();
    });
  }), onBeforeUnmount(() => {
    t.unobserve(n.value);
  }), (t2, a3) => (openBlock(), createElementBlock(`div`, { ref_key: `wall`, ref: n, class: `wl-gallery`, style: normalizeStyle({ gap: `${e.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(i2.value, (n2, i3) => (openBlock(), createElementBlock(`div`, { key: i3, class: `wl-gallery-column`, "data-index": i3, style: normalizeStyle({ gap: `${e.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(n2, (n3) => (openBlock(), createElementBlock(Fragment, { key: n3 }, [r2.value[e.items[n3].src] ? createCommentVNode(`v-if`, true) : (openBlock(), createBlock(unref(Rt), { key: 0, size: 36, style: { margin: `20px auto` } })), createBaseVNode(`img`, { class: `wl-gallery-item`, src: e.items[n3].src, title: e.items[n3].title, loading: `lazy`, onLoad: l2, onClick: (r3) => t2.$emit(`insert`, `![](${e.items[n3].src})`) }, null, 40, Qt)], 64))), 128))], 12, Zt))), 128))], 4));
} });
var en = { key: 0, class: `wl-login-info` };
var tn = { class: `wl-avatar` };
var nn = [`title`];
var rn = [`title`];
var an = [`src`];
var on = [`title`, `textContent`];
var sn = { class: `wl-panel` };
var cn = [`for`, `textContent`];
var ln = [`id`, `onUpdate:modelValue`, `name`, `type`];
var un = [`placeholder`];
var dn = { class: `wl-preview` };
var fn = [`innerHTML`];
var pn = { class: `wl-footer` };
var mn = { class: `wl-actions` };
var hn = { href: `https://guides.github.com/features/mastering-markdown/`, title: `Markdown Guide`, "aria-label": `Markdown is supported`, class: `wl-action`, target: `_blank`, rel: `noopener noreferrer` };
var gn = [`title`];
var _n = [`title`];
var vn = [`title`, `aria-label`];
var yn = [`title`];
var bn = { class: `wl-info` };
var xn = { class: `wl-text-number` };
var Sn = { key: 0 };
var Cn = [`textContent`];
var wn = [`textContent`];
var Tn = [`disabled`];
var En = [`placeholder`];
var Dn = { key: 1, class: `wl-loading` };
var On = [`title`, `onClick`, `onMouseenter`];
var kn = [`src`, `alt`];
var An = [`src`];
var jn = { key: 0, class: `wl-tabs` };
var Mn = [`onClick`];
var Nn = [`src`, `alt`, `title`];
var Pn = [`title`];
var Fn = defineComponent({ __name: `CommentBox`, props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: [`log`, `cancelEdit`, `cancelReply`, `submit`], setup(t, { emit: n }) {
  let r2 = t, i2 = n, a2 = inject(Pe), o2 = gt(), s2 = ht(), l2 = Tt(), d2 = ref({}), m2 = useTemplateRef(`textarea`), h3 = useTemplateRef(`image-uploader`), g = useTemplateRef(`emoji-button`), _ = useTemplateRef(`emoji-popup`), y = useTemplateRef(`gif-button`), b = useTemplateRef(`gif-popup`), C = useTemplateRef(`gif-search`), A = ref({ tabs: [], map: {} }), j = ref(0), P = ref(false), I = ref(``), re = ref({}), ae, ue = (e, t2) => {
    clearTimeout(ae), I.value = t2;
    let n2 = e.currentTarget, r3 = _.value;
    if (n2 && r3) {
      let e2 = n2.getBoundingClientRect(), t3 = r3.getBoundingClientRect();
      re.value = { left: `${e2.left - t3.left + e2.width / 2}px`, top: `${e2.top - t3.top}px`, transform: `translate(-50%, -100%)` };
    }
  }, fe2 = () => {
    ae = setTimeout(() => {
      I.value = ``;
    }, 50);
  }, U2 = ref(false), W2 = ref(false), G2 = ref(``), me2 = ref(0), K2 = reactive({ loading: true, list: [] }), he2 = ref(0), q2 = ref(false), ge2 = ref(``), J2 = ref(false), Y2 = ref(false), X2 = computed(() => a2.value.locale), _e2 = computed(() => !!l2.value.token), Z3 = computed(() => a2.value.imageUploader != null), ve2 = (e) => {
    let t2 = m2.value, n2 = t2.selectionStart, r3 = t2.selectionEnd || 0, { scrollTop: i3 } = t2;
    o2.value = t2.value.slice(0, n2) + e + t2.value.slice(r3), t2.focus(), t2.selectionStart = n2 + e.length, t2.selectionEnd = n2 + e.length, t2.scrollTop = i3;
  }, ye2 = async (e) => {
    let t2 = `![${a2.value.locale.uploading} ${e.name}]()`;
    ve2(t2), J2.value = true;
    try {
      let n2 = await a2.value.imageUploader(e);
      o2.value = o2.value.replace(t2, `\r
![${e.name}](${n2})`);
    } catch (e2) {
      alert(e2.message), o2.value = o2.value.replace(t2, ``);
    } finally {
      J2.value = false;
    }
  }, be2 = (e) => {
    var _a;
    if ((_a = e.dataTransfer) == null ? void 0 : _a.items) {
      let t2 = nt(e.dataTransfer.items);
      t2 && Z3.value && (ye2(t2), e.preventDefault());
    }
  }, xe2 = (e) => {
    if (e.clipboardData) {
      let t2 = nt(e.clipboardData.items);
      t2 && Z3.value && ye2(t2);
    }
  }, Se2 = () => {
    let e = h3.value;
    e.files && Z3.value && ye2(e.files[0]).then(() => {
      e.value = ``;
    });
  }, Ce2 = async () => {
    var _a;
    let { serverURL: t2, lang: n2, login: c2, wordLimit: f2, requiredMeta: p2, recaptchaV3Key: h4, turnstileKey: g2 } = a2.value, _2 = { comment: ge2.value, nick: s2.value.nick, mail: s2.value.mail, link: s2.value.link, url: a2.value.path, ua: await pt() };
    if (!r2.edit) if (l2.value.token) _2.nick = l2.value.display_name, _2.mail = l2.value.email, _2.link = l2.value.url;
    else {
      if (c2 === `force`) return;
      if (p2.includes(`nick`) && !_2.nick) {
        d2.value.nick.focus(), alert(X2.value.nickError);
        return;
      }
      if (p2.includes(`mail`) && !_2.mail || _2.mail && !Je(_2.mail)) {
        d2.value.mail.focus(), alert(X2.value.mailError);
        return;
      }
      _2.nick || (_2.nick = X2.value.anonymous);
    }
    if (!_2.comment) {
      m2.value.focus();
      return;
    }
    if (!q2.value) {
      alert(X2.value.wordHint.replace(`$0`, f2[0].toString()).replace(`$1`, f2[1].toString()).replace(`$2`, me2.value.toString()));
      return;
    }
    _2.comment = st(_2.comment, A.value.map), r2.replyId && r2.rootId && (_2.pid = r2.replyId, _2.rid = r2.rootId, _2.at = r2.replyUser), J2.value = true;
    try {
      h4 && (_2.recaptchaV3 = await St(h4).execute(`social`)), g2 && (_2.turnstile = await Ct(g2).execute(`social`));
      let a3 = { serverURL: t2, lang: n2, token: l2.value.token, comment: _2 }, s3 = await (r2.edit ? c({ objectId: r2.edit.objectId, ...a3 }) : o(a3));
      if (J2.value = false, s3.errmsg) {
        alert(s3.errmsg);
        return;
      }
      i2(`submit`, s3.data), o2.value = ``, G2.value = ``, await nextTick(), r2.replyId && i2(`cancelReply`), ((_a = r2.edit) == null ? void 0 : _a.objectId) && i2(`cancelEdit`);
    } catch (e) {
      J2.value = false, alert(e.message);
    }
  }, we2 = ({ key: e, ctrlKey: t2, metaKey: n2 }) => {
    J2.value || (t2 || n2) && e === `Enter` && Ce2();
  }, Te2 = (e) => {
    e.preventDefault();
    let { lang: t2, serverURL: n2 } = a2.value;
    d({ serverURL: n2, lang: t2 }).then((e2) => {
      l2.value = e2, (e2.remember ? localStorage : sessionStorage).setItem(`WALINE_USER`, JSON.stringify(e2)), i2(`log`);
    });
  }, Ee2 = () => {
    l2.value = {}, localStorage.setItem(`WALINE_USER`, `null`), sessionStorage.setItem(`WALINE_USER`, `null`), i2(`log`);
  }, De2 = (e) => {
    var _a;
    e.preventDefault();
    let { lang: t2, serverURL: n2 } = a2.value, r3 = 1200, i3 = (window.innerWidth - r3) / 2, o3 = (window.innerHeight - 720) / 2, s3 = new URLSearchParams({ lng: t2, token: l2.value.token });
    (_a = window.open(`${n2}/ui/profile?${s3.toString()}`, `_blank`, `width=${r3},height=720,left=${i3},top=${o3},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)) == null ? void 0 : _a.postMessage({ type: `TOKEN`, data: l2.value.token }, `*`);
  }, Oe2 = (e) => {
    var _a, _b, _c, _d;
    !((_a = g.value) == null ? void 0 : _a.contains(e.target)) && !((_b = _.value) == null ? void 0 : _b.contains(e.target)) && (P.value = false), !((_c = y.value) == null ? void 0 : _c.contains(e.target)) && !((_d = b.value) == null ? void 0 : _d.contains(e.target)) && (U2.value = false);
  }, ke2 = async (e) => {
    var _a;
    let { scrollTop: t2, clientHeight: n2, scrollHeight: r3 } = e.target, i3 = (n2 + t2) / r3, o3 = a2.value.search, s3 = ((_a = C.value) == null ? void 0 : _a.value) ?? ``;
    i3 < 0.9 || K2.loading || Y2.value || (K2.loading = true, (o3.more && K2.list.length > 0 ? await o3.more(s3, K2.list.length) : await o3.search(s3)).length > 0 ? K2.list = [...K2.list, ...o3.more && K2.list.length > 0 ? await o3.more(s3, K2.list.length) : await o3.search(s3)] : Y2.value = true, K2.loading = false, setTimeout(() => {
      e.target.scrollTop = t2;
    }, 50));
  }, Q2 = useDebounceFn((e) => {
    K2.list = [], Y2.value = false, ke2(e);
  }, 300);
  return useEventListener(`click`, Oe2), useEventListener(`message`, ({ data: e }) => {
    (e == null ? void 0 : e.type) === `profile` && (l2.value = { ...l2.value, ...e.data }, [localStorage, sessionStorage].filter((e2) => e2.getItem(`WALINE_USER`)).forEach((e2) => {
      e2.setItem(`WALINE_USER`, JSON.stringify(l2));
    }));
  }), watchImmediate([a2, me2], ([e, t2]) => {
    let { wordLimit: n2 } = e;
    n2 ? t2 < n2[0] && n2[0] !== 0 ? ([he2.value] = n2, q2.value = false) : ([, he2.value] = n2, q2.value = t2 <= n2[1]) : (he2.value = 0, q2.value = true);
  }), watch(U2, async (e) => {
    var _a;
    if (!e) return;
    let t2 = a2.value.search;
    C.value && (C.value.value = ``), K2.loading = true, K2.list = await (((_a = t2.default) == null ? void 0 : _a.call(t2)) ?? t2.search(``)), K2.loading = false;
  }), onMounted(() => {
    var _a;
    ((_a = r2.edit) == null ? void 0 : _a.objectId) && (o2.value = r2.edit.orig), watchImmediate(() => o2.value, (e) => {
      let { highlighter: t2, texRenderer: n2 } = a2.value;
      ge2.value = e, G2.value = ct(e, { emojiMap: A.value.map, highlighter: t2, texRenderer: n2 }), me2.value = ft(e), e ? autosize_esm_default(m2.value) : autosize_esm_default.destroy(m2.value);
    }), watchImmediate(() => a2.value.emoji, async (e) => {
      A.value = await $e(e);
    });
  }), (e, n2) => {
    var _a, _b;
    return openBlock(), createElementBlock(`div`, { key: unref(l2).token, class: `wl-comment` }, [unref(a2).login !== `disable` && _e2.value && !((_a = t.edit) == null ? void 0 : _a.objectId) ? (openBlock(), createElementBlock(`div`, en, [createBaseVNode(`div`, tn, [createBaseVNode(`button`, { type: `submit`, class: `wl-logout-btn`, title: X2.value.logout, onClick: Ee2 }, [createVNode(unref(Dt), { size: 14 })], 8, nn), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: X2.value.profile, onClick: De2 }, [createBaseVNode(`img`, { src: unref(l2).avatar, alt: `avatar` }, null, 8, an)], 8, rn)]), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: X2.value.profile, onClick: De2, textContent: toDisplayString(unref(l2).display_name) }, null, 8, on)])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, sn, [unref(a2).login !== `force` && unref(a2).meta.length && !_e2.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: normalizeClass([`wl-header`, `item${unref(a2).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(a2).meta, (e2) => (openBlock(), createElementBlock(`div`, { key: e2, class: `wl-header-item` }, [createBaseVNode(`label`, { for: `wl-${e2}`, textContent: toDisplayString(X2.value[e2] + (unref(a2).requiredMeta.includes(e2) || !unref(a2).requiredMeta.length ? `` : `(${X2.value.optional})`)) }, null, 8, cn), withDirectives(createBaseVNode(`input`, { id: `wl-${e2}`, ref_for: true, ref: (t2) => {
      t2 && (d2.value[e2] = t2);
    }, "onUpdate:modelValue": (t2) => unref(s2)[e2] = t2, class: normalizeClass([`wl-input`, `wl-${e2}`]), name: e2, type: e2 === `mail` ? `email` : `text` }, null, 10, ln), [[vModelDynamic, unref(s2)[e2]]])]))), 128))], 2)) : createCommentVNode(`v-if`, true), withDirectives(createBaseVNode(`textarea`, { id: `wl-edit`, ref: `textarea`, "onUpdate:modelValue": n2[0] || (n2[0] = (e2) => isRef(o2) ? o2.value = e2 : null), class: `wl-editor`, placeholder: t.replyUser ? `@${t.replyUser}` : X2.value.placeholder, onKeydown: we2, onDrop: be2, onPaste: xe2 }, null, 40, un), [[vModelText, unref(o2)]]), withDirectives(createBaseVNode(`div`, dn, [n2[7] || (n2[7] = createBaseVNode(`hr`, null, null, -1)), createBaseVNode(`h4`, null, toDisplayString(X2.value.preview) + `:`, 1), createBaseVNode(`div`, { class: `wl-content`, innerHTML: G2.value }, null, 8, fn)], 512), [[vShow, W2.value]]), createBaseVNode(`div`, pn, [createBaseVNode(`div`, mn, [createBaseVNode(`a`, hn, [createVNode(unref(Nt))]), withDirectives(createBaseVNode(`button`, { ref: `emoji-button`, type: `button`, class: normalizeClass([`wl-action`, { active: P.value }]), title: X2.value.emoji, onClick: n2[1] || (n2[1] = (e2) => P.value = !P.value) }, [createVNode(unref(kt))], 10, gn), [[vShow, A.value.tabs.length]]), unref(a2).search ? (openBlock(), createElementBlock(`button`, { key: 0, ref: `gif-button`, type: `button`, class: normalizeClass([`wl-action`, { active: U2.value }]), title: X2.value.gif, onClick: n2[2] || (n2[2] = (e2) => U2.value = !U2.value) }, [createVNode(unref(zt))], 10, _n)) : createCommentVNode(`v-if`, true), createBaseVNode(`input`, { id: `wl-image-upload`, ref: `image-uploader`, class: `upload`, "aria-hidden": `true`, type: `file`, accept: `.png,.jpg,.jpeg,.webp,.bmp,.gif`, onChange: Se2 }, null, 544), Z3.value ? (openBlock(), createElementBlock(`label`, { key: 1, for: `wl-image-upload`, class: `wl-action`, title: X2.value.uploadImage, "aria-label": X2.value.uploadImage }, [createVNode(unref(At))], 8, vn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-action`, { active: W2.value }]), title: X2.value.preview, onClick: n2[3] || (n2[3] = (e2) => W2.value = !W2.value) }, [createVNode(unref(Mt))], 10, yn)]), createBaseVNode(`div`, bn, [n2[9] || (n2[9] = createBaseVNode(`div`, { class: `wl-captcha-container` }, null, -1)), createBaseVNode(`div`, xn, [createTextVNode(toDisplayString(me2.value) + ` `, 1), unref(a2).wordLimit ? (openBlock(), createElementBlock(`span`, Sn, [n2[8] || (n2[8] = createTextVNode(`  /  `, -1)), createBaseVNode(`span`, { class: normalizeClass({ illegal: !q2.value }), textContent: toDisplayString(he2.value) }, null, 10, Cn)])) : createCommentVNode(`v-if`, true), createTextVNode(`  ` + toDisplayString(X2.value.word), 1)]), unref(a2).login !== `disable` && !_e2.value ? (openBlock(), createElementBlock(`button`, { key: 0, type: `button`, class: `wl-btn`, onClick: Te2, textContent: toDisplayString(X2.value.login) }, null, 8, wn)) : createCommentVNode(`v-if`, true), unref(a2).login !== `force` || _e2.value ? (openBlock(), createElementBlock(`button`, { key: 1, type: `submit`, class: `primary wl-btn`, title: `Cmd|Ctrl + Enter`, disabled: J2.value, onClick: Ce2 }, [J2.value ? (openBlock(), createBlock(unref(Rt), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(X2.value.submit), 1)], 64))], 8, Tn)) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, { ref: `gif-popup`, class: normalizeClass([`wl-gif-popup`, { display: U2.value }]) }, [createBaseVNode(`input`, { ref: `gif-search`, type: `text`, placeholder: X2.value.gifSearchPlaceholder, onInput: n2[4] || (n2[4] = (...e2) => unref(Q2) && unref(Q2)(...e2)) }, null, 40, En), K2.list.length ? (openBlock(), createBlock($t, { key: 0, items: K2.list, "column-width": 200, gap: 6, onInsert: n2[5] || (n2[5] = (e2) => ve2(e2)), onScroll: ke2 }, null, 8, [`items`])) : createCommentVNode(`v-if`, true), K2.loading ? (openBlock(), createElementBlock(`div`, Dn, [createVNode(unref(Rt), { size: 30 })])) : createCommentVNode(`v-if`, true)], 2), createBaseVNode(`div`, { ref: `emoji-popup`, class: normalizeClass([`wl-emoji-popup`, { display: P.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(A.value.tabs, (e2, t2) => (openBlock(), createElementBlock(Fragment, { key: e2.name }, [t2 === j.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: `wl-tab-wrapper`, onScroll: fe2 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.items, (e3) => (openBlock(), createElementBlock(`button`, { key: e3, type: `button`, title: e3, onClick: (t3) => ve2(`:${e3}:`), onMouseenter: (t3) => ue(t3, e3), onMouseleave: fe2 }, [P.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji`, src: A.value.map[e3], alt: e3, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, kn)) : createCommentVNode(`v-if`, true)], 40, On))), 128))], 32)) : createCommentVNode(`v-if`, true)], 64))), 128)), createBaseVNode(`div`, null, [I.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji-preview`, src: A.value.map[I.value], alt: `preview`, loading: `lazy`, referrerPolicy: `no-referrer`, style: normalizeStyle(re.value) }, null, 12, An)) : createCommentVNode(`v-if`, true)]), A.value.tabs.length > 1 ? (openBlock(), createElementBlock(`div`, jn, [(openBlock(true), createElementBlock(Fragment, null, renderList(A.value.tabs, (e2, t2) => (openBlock(), createElementBlock(`button`, { key: e2.name, type: `button`, class: normalizeClass([`wl-tab`, { active: j.value === t2 }]), onClick: (e3) => j.value = t2 }, [createBaseVNode(`img`, { class: `wl-emoji`, src: e2.icon, alt: e2.name, title: e2.name, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, Nn)], 10, Mn))), 128))])) : createCommentVNode(`v-if`, true)], 2)])]), t.replyId || ((_b = t.edit) == null ? void 0 : _b.objectId) ? (openBlock(), createElementBlock(`button`, { key: 1, type: `button`, class: `wl-close`, title: X2.value.cancelReply, onClick: n2[6] || (n2[6] = (e2) => t.replyId ? i2(`cancelReply`) : i2(`cancelEdit`)) }, [createVNode(unref(Dt), { size: 24 })], 8, Pn)) : createCommentVNode(`v-if`, true)]);
  };
} });
var In = [`id`];
var Ln = { class: `wl-user`, "aria-hidden": `true` };
var Rn = [`src`];
var zn = { class: `wl-card` };
var Bn = { class: `wl-head` };
var Vn = [`href`];
var Hn = { key: 1, class: `wl-nick` };
var Un = [`textContent`];
var Wn = [`textContent`];
var Gn = [`textContent`];
var Kn = [`textContent`];
var qn = { class: `wl-comment-actions` };
var Jn = [`title`, `href`];
var Yn = [`title`];
var Xn = [`title`];
var Zn = { class: `wl-meta`, "aria-hidden": `true` };
var Qn = [`data-value`, `textContent`];
var $n = { key: 0, class: `wl-warning`, "aria-hidden": `true` };
var er = { key: 1, class: `wl-content` };
var tr = { key: 0, class: `wl-reply-to` };
var nr = [`href`];
var rr = [`innerHTML`];
var ir = { key: 2, class: `wl-admin-actions` };
var ar = { class: `wl-comment-status` };
var or = [`disabled`, `onClick`, `textContent`];
var sr = { key: 4, class: `wl-quote` };
var cr = defineComponent({ __name: `CommentCard`, props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: [`log`, `submit`, `delete`, `like`, `sticky`, `edit`, `reply`, `status`], setup(e, { emit: t }) {
  let n = t, r2 = [`approved`, `waiting`, `spam`], i2 = inject(Pe), a2 = vt(), o2 = useNow(), s2 = Tt(), c2 = computed(() => i2.value.locale), l2 = computed(() => {
    let { link: t2 } = e.comment;
    return t2 ? Le(t2) ? t2 : `https://${t2}` : ``;
  }), u = computed(() => a2.value.includes(e.comment.objectId)), d2 = computed(() => Ke(new Date(e.comment.time), o2.value, c2.value)), f2 = computed(() => s2.value.type === `administrator`), p2 = computed(() => e.comment.user_id && s2.value.objectId === e.comment.user_id), h3 = computed(() => {
    var _a;
    return e.comment.objectId === ((_a = e.reply) == null ? void 0 : _a.objectId);
  }), g = computed(() => {
    var _a;
    return e.comment.objectId === ((_a = e.edit) == null ? void 0 : _a.objectId);
  });
  return (t2, a3) => {
    var _a;
    let o3 = resolveComponent(`CommentCard`, true);
    return openBlock(), createElementBlock(`div`, { id: e.comment.objectId.toString(), class: `wl-card-item` }, [createBaseVNode(`div`, Ln, [e.comment.avatar ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-user-avatar`, src: e.comment.avatar, alt: `` }, null, 8, Rn)) : createCommentVNode(`v-if`, true), e.comment.type === `guest` ? (openBlock(), createBlock(unref(It), { key: 1 })) : createCommentVNode(`v-if`, true), e.comment.type === `administrator` ? (openBlock(), createBlock(unref(Lt), { key: 2 })) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, zn, [createBaseVNode(`div`, Bn, [l2.value ? (openBlock(), createElementBlock(`a`, { key: 0, class: `wl-nick`, href: l2.value, target: `_blank`, rel: `ugc nofollow noreferrer noopener` }, toDisplayString(e.comment.nick), 9, Vn)) : (openBlock(), createElementBlock(`span`, Hn, toDisplayString(e.comment.nick), 1)), e.comment.label ? (openBlock(), createElementBlock(`span`, { key: 2, class: `wl-badge`, textContent: toDisplayString(e.comment.label) }, null, 8, Un)) : createCommentVNode(`v-if`, true), e.comment.sticky ? (openBlock(), createElementBlock(`span`, { key: 3, class: `wl-badge`, textContent: toDisplayString(c2.value.sticky) }, null, 8, Wn)) : createCommentVNode(`v-if`, true), typeof e.comment.level == `number` ? (openBlock(), createElementBlock(`span`, { key: 4, class: normalizeClass(`wl-badge level${e.comment.level}`), textContent: toDisplayString(c2.value[`level${e.comment.level}`] || `Level ${e.comment.level}`) }, null, 10, Gn)) : createCommentVNode(`v-if`, true), createBaseVNode(`span`, { class: `wl-time`, textContent: toDisplayString(d2.value) }, null, 8, Kn), createBaseVNode(`div`, qn, [f2.value || p2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode(`button`, { type: `button`, class: `wl-edit`, onClick: a3[0] || (a3[0] = (t3) => n(`edit`, e.comment)) }, [createVNode(unref(Ft))]), createBaseVNode(`button`, { type: `button`, class: `wl-delete`, onClick: a3[1] || (a3[1] = (t3) => n(`delete`, e.comment)) }, [createVNode(unref(Ot))])], 64)) : createCommentVNode(`v-if`, true), p2.value && !unref(i2).noRss ? (openBlock(), createElementBlock(`a`, { key: 1, role: `button`, class: `wl-rss`, title: c2.value.subscribeToReplies, href: `${unref(i2).serverURL}/api/comment/rss?user_id=${e.comment.user_id}`, target: `_blank`, rel: `noopener noreferrer` }, [createVNode(unref(Vt))], 8, Jn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: `wl-like`, title: u.value ? c2.value.cancelLike : c2.value.like, onClick: a3[2] || (a3[2] = (t3) => n(`like`, e.comment)) }, [createVNode(unref(jt), { active: u.value }, null, 8, [`active`]), createTextVNode(` ` + toDisplayString(`like` in e.comment ? e.comment.like : ``), 1)], 8, Yn), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-reply`, { active: h3.value }]), title: h3.value ? c2.value.cancelReply : c2.value.reply, onClick: a3[3] || (a3[3] = (t3) => n(`reply`, h3.value ? null : e.comment)) }, [createVNode(unref(Pt))], 10, Xn)])]), createBaseVNode(`div`, Zn, [(openBlock(), createElementBlock(Fragment, null, renderList([`addr`, `browser`, `os`], (t3) => (openBlock(), createElementBlock(Fragment, null, [e.comment[t3] ? (openBlock(), createElementBlock(`span`, { key: t3, class: normalizeClass(`wl-${t3}`), "data-value": e.comment[t3], textContent: toDisplayString(e.comment[t3]) }, null, 10, Qn)) : createCommentVNode(`v-if`, true)], 64))), 64))]), e.comment.status === `waiting` && !f2.value ? (openBlock(), createElementBlock(`div`, $n, toDisplayString(c2.value.commentUnderReview), 1)) : createCommentVNode(`v-if`, true), g.value ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, er, [`reply_user` in e.comment && e.comment.reply_user ? (openBlock(), createElementBlock(`p`, tr, [createBaseVNode(`a`, { href: `#` + e.comment.pid }, `@` + toDisplayString(e.comment.reply_user.nick), 9, nr), a3[17] || (a3[17] = createBaseVNode(`span`, null, `: `, -1))])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, { innerHTML: e.comment.comment }, null, 8, rr)])), f2.value && !g.value ? (openBlock(), createElementBlock(`div`, ir, [createBaseVNode(`span`, ar, [(openBlock(), createElementBlock(Fragment, null, renderList(r2, (t3) => createBaseVNode(`button`, { key: t3, type: `submit`, class: normalizeClass(`wl-btn wl-${t3}`), disabled: e.comment.status === t3, onClick: (r3) => n(`status`, { status: t3, comment: e.comment }), textContent: toDisplayString(c2.value[t3]) }, null, 10, or)), 64))]), f2.value && !(`rid` in e.comment) ? (openBlock(), createElementBlock(`button`, { key: 0, type: `submit`, class: `wl-btn wl-sticky`, onClick: a3[4] || (a3[4] = (t3) => n(`sticky`, e.comment)) }, toDisplayString(e.comment.sticky ? c2.value.unsticky : c2.value.sticky), 1)) : createCommentVNode(`v-if`, true)])) : createCommentVNode(`v-if`, true), h3.value || g.value ? (openBlock(), createElementBlock(`div`, { key: 3, class: normalizeClass({ "wl-reply-wrapper": h3.value, "wl-edit-wrapper": g.value }) }, [createVNode(Fn, { edit: e.edit, "reply-id": (_a = e.reply) == null ? void 0 : _a.objectId, "reply-user": e.comment.nick, "root-id": e.rootId, onLog: a3[5] || (a3[5] = (e2) => n(`log`)), onCancelReply: a3[6] || (a3[6] = (e2) => n(`reply`, null)), onCancelEdit: a3[7] || (a3[7] = (e2) => n(`edit`, null)), onSubmit: a3[8] || (a3[8] = (e2) => n(`submit`, e2)) }, null, 8, [`edit`, `reply-id`, `reply-user`, `root-id`])], 2)) : createCommentVNode(`v-if`, true), `children` in e.comment ? (openBlock(), createElementBlock(`div`, sr, [(openBlock(true), createElementBlock(Fragment, null, renderList(e.comment.children, (t3) => (openBlock(), createBlock(o3, { key: t3.objectId, comment: t3, reply: e.reply, edit: e.edit, "root-id": e.rootId, onLog: a3[9] || (a3[9] = (e2) => n(`log`)), onDelete: a3[10] || (a3[10] = (e2) => n(`delete`, e2)), onEdit: a3[11] || (a3[11] = (e2) => n(`edit`, e2)), onLike: a3[12] || (a3[12] = (e2) => n(`like`, e2)), onReply: a3[13] || (a3[13] = (e2) => n(`reply`, e2)), onStatus: a3[14] || (a3[14] = (e2) => n(`status`, e2)), onSticky: a3[15] || (a3[15] = (e2) => n(`sticky`, e2)), onSubmit: a3[16] || (a3[16] = (e2) => n(`submit`, e2)) }, null, 8, [`comment`, `reply`, `edit`, `root-id`]))), 128))])) : createCommentVNode(`v-if`, true)])], 8, In);
  };
} });
var lr = { "data-waline": `` };
var ur = { class: `wl-meta-head` };
var dr = { class: `wl-count` };
var fr = [`textContent`];
var pr = { class: `wl-sort` };
var mr = [`onClick`];
var hr = { class: `wl-cards` };
var gr = { key: 1, class: `wl-operation` };
var _r = [`textContent`];
var vr = { key: 2, class: `wl-loading` };
var yr = [`textContent`];
var br = { key: 4, class: `wl-operation` };
var xr = [`textContent`];
var Sr = { key: 5, class: `wl-meta-foot` };
var Cr = { key: 0, class: `wl-rss` };
var wr = [`href`, `alt`];
var Tr = [`textContent`];
var Er = [`href`, `alt`];
var Dr = [`textContent`];
var Or = { key: 1, class: `wl-power` };
var kr = defineComponent({ __name: `WalineComment`, props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, noRss: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: { type: [Object, Boolean] }, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(e) {
  let n = e, r2 = Tt(), a2 = vt(), o2 = ref(`loading`), s2 = ref(0), c2 = ref(1), l2 = ref(0), d2 = computed(() => Ve(n)), f2 = ref(d2.value.commentSorting), p2 = ref([]), m2 = ref(null), h3 = ref(null), g = computed(() => Ue(d2.value.dark)), y = computed(() => d2.value.locale);
  useStyleTag(g, { id: `waline-darkmode` });
  let b = null, C = (e2) => {
    let { serverURL: t, path: n2, pageSize: a3 } = d2.value, u = new AbortController();
    o2.value = `loading`, b == null ? void 0 : b(), a({ serverURL: t, lang: d2.value.lang, path: n2, pageSize: a3, sortBy: Me[f2.value], page: e2, signal: u.signal, token: r2.value.token }).then((t2) => {
      o2.value = `success`, s2.value = t2.count, p2.value.push(...t2.data), c2.value = e2, l2.value = t2.totalPages;
    }).catch((e3) => {
      e3.name !== `AbortError` && (console.error(e3.message), o2.value = `error`);
    }), b = u.abort.bind(u);
  }, A = () => {
    C(c2.value + 1);
  }, j = () => {
    s2.value = 0, p2.value = [], C(1);
  }, ee = (e2) => {
    f2.value !== e2 && (f2.value = e2, j());
  }, te = (e2) => {
    m2.value = e2;
  }, ne = (e2) => {
    h3.value = e2;
  }, N = (e2) => {
    if (h3.value) h3.value.comment = e2.comment, h3.value.orig = e2.orig;
    else if (`rid` in e2) {
      let t = p2.value.find(({ objectId: t2 }) => t2 === e2.rid);
      if (!t) return;
      Array.isArray(t.children) || (t.children = []), t.children.push(e2);
    } else p2.value.unshift(e2), s2.value += 1;
  }, P = async ({ comment: e2, status: t }) => {
    if (e2.status === t) return;
    let { serverURL: n2, lang: i2 } = d2.value;
    await c({ serverURL: n2, lang: i2, token: r2.value.token, objectId: e2.objectId, comment: { status: t } }), e2.status = t;
  }, ie = async (e2) => {
    if (`rid` in e2) return;
    let { serverURL: t, lang: n2 } = d2.value;
    await c({ serverURL: t, lang: n2, token: r2.value.token, objectId: e2.objectId, comment: { sticky: +!e2.sticky } }), e2.sticky = !e2.sticky;
  }, ae = async ({ objectId: e2 }) => {
    if (!confirm(`Are you sure you want to delete this comment?`)) return;
    let { serverURL: n2, lang: i2 } = d2.value;
    await s({ serverURL: n2, lang: i2, token: r2.value.token, objectId: e2 }), p2.value.some((t, n3) => t.objectId === e2 ? (p2.value = p2.value.filter((e3, t2) => t2 !== n3), true) : t.children.some((r3, i3) => r3.objectId === e2 ? (p2.value[n3].children = t.children.filter((e3, t2) => t2 !== i3), true) : false));
  }, H = async (e2) => {
    let { serverURL: t, lang: n2 } = d2.value, { objectId: i2 } = e2, o3 = a2.value.includes(i2);
    await c({ serverURL: t, lang: n2, objectId: i2, token: r2.value.token, comment: { like: !o3 } }), o3 ? a2.value = a2.value.filter((e3) => e3 !== i2) : (a2.value = [...a2.value, i2], a2.value.length > 50 && (a2.value = a2.value.slice(-50))), e2.like = Math.max(0, (e2.like || 0) + (o3 ? -1 : 1));
  };
  return provide(Pe, d2), onMounted(async () => {
    var _a;
    watchImmediate(() => [n.serverURL, n.path], () => {
      j();
    });
    let e2 = new URLSearchParams(location.search).get(`token`);
    if (!e2) return;
    let t = await fetch(`${d2 == null ? void 0 : d2.value.serverURL}/token`, { headers: { Authorization: `Bearer ${e2}` } }).then((e3) => e3.json()).catch((e3) => (console.error(e3), {}));
    !t.errno && ((_a = t == null ? void 0 : t.data) == null ? void 0 : _a.objectId) && (r2.value = { ...t.data, token: e2 });
    let i2 = new URL(window.location.href);
    i2.searchParams.delete(`token`), history.replaceState(null, ``, i2.pathname + (i2.searchParams.toString() ? `?${i2.searchParams.toString()}` : ``) + i2.hash);
  }), onUnmounted(() => {
    b == null ? void 0 : b();
  }), (e2, t) => (openBlock(), createElementBlock(`div`, lr, [createVNode(Xt), !m2.value && !h3.value ? (openBlock(), createBlock(Fn, { key: 0, onLog: j, onSubmit: N })) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, ur, [createBaseVNode(`div`, dr, [s2.value ? (openBlock(), createElementBlock(`span`, { key: 0, class: `wl-num`, textContent: toDisplayString(s2.value) }, null, 8, fr)) : createCommentVNode(`v-if`, true), createTextVNode(` ` + toDisplayString(y.value.comment), 1)]), createBaseVNode(`ul`, pr, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Ne), (e3) => (openBlock(), createElementBlock(`li`, { key: e3, class: normalizeClass([e3 === f2.value ? `active` : ``]), onClick: (t2) => ee(e3) }, toDisplayString(y.value[e3]), 11, mr))), 128))])]), createBaseVNode(`div`, hr, [(openBlock(true), createElementBlock(Fragment, null, renderList(p2.value, (e3) => (openBlock(), createBlock(cr, { key: e3.objectId, "root-id": e3.objectId, comment: e3, reply: m2.value, edit: h3.value, onLog: j, onReply: te, onEdit: ne, onSubmit: N, onStatus: P, onDelete: ae, onSticky: ie, onLike: H }, null, 8, [`root-id`, `comment`, `reply`, `edit`]))), 128))]), o2.value === `error` ? (openBlock(), createElementBlock(`div`, gr, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: j, textContent: toDisplayString(y.value.refresh) }, null, 8, _r)])) : o2.value === `loading` ? (openBlock(), createElementBlock(`div`, vr, [createVNode(unref(Rt), { size: 30 })])) : p2.value.length ? c2.value < l2.value ? (openBlock(), createElementBlock(`div`, br, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: A, textContent: toDisplayString(y.value.more) }, null, 8, xr)])) : createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, { key: 3, class: `wl-empty`, textContent: toDisplayString(y.value.sofa) }, null, 8, yr)), p2.value.length || o2.value !== `loading` ? (openBlock(), createElementBlock(`div`, Sr, [d2.value.noRss ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Cr, [createBaseVNode(`a`, { href: `${d2.value.serverURL}/api/comment/rss?path=${encodeURIComponent(d2.value.path)}`, target: `_blank`, rel: `noopener noreferrer`, alt: y.value.subPostComment }, [createVNode(unref(Bt)), createBaseVNode(`span`, { textContent: toDisplayString(y.value.subPostComment) }, null, 8, Tr)], 8, wr), createBaseVNode(`a`, { href: `${d2.value.serverURL}/api/comment/rss`, target: `_blank`, rel: `noopener noreferrer`, alt: y.value.subSiteComment }, [createVNode(unref(Bt)), createBaseVNode(`span`, { textContent: toDisplayString(y.value.subSiteComment) }, null, 8, Dr)], 8, Er)])), d2.value.noCopyright ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Or, [t[0] || (t[0] = createTextVNode(` Powered by `, -1)), t[1] || (t[1] = createBaseVNode(`a`, { href: `https://github.com/walinejs/waline`, target: `_blank`, rel: `noopener noreferrer` }, ` Waline `, -1)), createTextVNode(` v` + toDisplayString(unref(Et)), 1)]))])) : createCommentVNode(`v-if`, true)]));
} });
var Ar = (e, t) => {
  t.forEach((t2, n) => {
    let r2 = e[n].time;
    typeof r2 == `number` && (t2.textContent = r2.toString());
  });
};
var jr = ({ serverURL: e, path: t = window.location.pathname, selector: n = `.waline-pageview-count`, update: r2 = true, lang: i2 = navigator.language }) => {
  let o2 = new AbortController(), s2 = [...document.querySelectorAll(n)], c2 = (e2) => {
    let n2 = lt(e2);
    return n2 != null && t !== n2;
  }, l2 = (n2) => f({ serverURL: Re(e), paths: n2.map((e2) => lt(e2) ?? t), lang: i2, signal: o2.signal }).then((e2) => {
    Ar(e2, n2);
  }).catch(et);
  if (r2) {
    let n2 = s2.filter((e2) => !c2(e2)), r3 = s2.filter((e2) => c2(e2));
    p({ serverURL: Re(e), path: t, lang: i2 }).then((e2) => {
      Ar(e2, n2);
    }), r3.length > 0 && l2(r3);
  } else l2(s2);
  return o2.abort.bind(o2);
};
var Mr = ({ el: e = `#waline`, path: t = window.location.pathname, comment: n = false, pageview: r2 = false, ...i2 }) => {
  let a2 = e ? tt(e) : null;
  if (e && !a2) throw Error(`Option 'el' do not match any domElement!`);
  if (!i2.serverURL) throw Error(`Option 'serverURL' is missing!`);
  let o2 = reactive({ ...i2 }), s2 = reactive({ comment: n, pageview: r2, path: t }), c2 = () => {
    s2.comment && mt({ serverURL: o2.serverURL, path: s2.path, ...$(s2.comment) ? { selector: s2.comment } : {} });
  }, l2 = () => {
    s2.pageview && jr({ serverURL: o2.serverURL, path: s2.path, ...$(s2.pageview) ? { selector: s2.pageview } : {} });
  }, u = null;
  a2 && (u = createApp(() => h(kr, { path: s2.path, ...o2 })), u.mount(a2));
  let d2 = watchEffect(c2), f2 = watchEffect(l2);
  return { el: a2, update: ({ comment: e2, pageview: t2, path: n2 = window.location.pathname, ...r3 } = {}) => {
    Object.entries(r3).forEach(([e3, t3]) => {
      o2[e3] = t3;
    }), s2.path = n2, e2 != null && (s2.comment = e2), t2 != null && (s2.pageview = t2);
  }, destroy: () => {
    u == null ? void 0 : u.unmount(), d2(), f2();
  } };
};
var Nr = ({ el: e, serverURL: t, count: n, lang: r2 = navigator.language }) => {
  let i2 = Tt(), a2 = tt(e), s2 = new AbortController();
  return m({ serverURL: t, count: n, lang: r2, signal: s2.signal, token: i2.value.token }).then((e2) => a2 && e2.length > 0 ? (a2.innerHTML = `<ul class="wl-recent-list">${e2.map((e3) => `<li class="wl-recent-item"><a href="${e3.url}">${e3.nick}</a>：${e3.comment}</li>`).join(``)}</ul>`, { comments: e2, destroy: () => {
    s2.abort(), a2.innerHTML = ``;
  } }) : { comments: e2, destroy: () => {
    s2.abort();
  } });
};
var Pr = ({ el: e, serverURL: t, count: n, locale: r2, lang: i2 = navigator.language, mode: a2 = `list` }) => {
  let o2 = tt(e), c2 = new AbortController();
  return h2({ serverURL: t, pageSize: n, lang: i2, signal: c2.signal }).then((e2) => {
    if (!o2 || e2.length === 0) return { users: e2, destroy: () => {
      c2.abort();
    } };
    let t2 = { ...Ae(i2), ...typeof r2 == `object` ? r2 : {} };
    return o2.innerHTML = `<ul class="wl-user-${a2}">${e2.map((e3, n2) => [`<li class="wl-user-item" aria-label="${e3.nick}">`, e3.link ? `<a href="${e3.link}" target="_blank">` : ``, `<div class="wl-user-avatar">`, `<img src="${e3.avatar}" alt="${e3.nick}">`, `<span class="wl-user-badge">${n2 + 1}</span>`, `</div>`, `<div class="wl-user-meta">`, `<div class="wl-user-name">`, e3.nick, typeof e3.level == `number` ? `<span class="wl-badge">${t2[`level${e3.level}`] ?? `Level ${e3.level}`}</span>` : ``, e3.label ? `<span class="wl-badge">${e3.label}</span>` : ``, `</div>`, e3.link, `</div>`, e3.link ? `</a>` : ``, `</li>`].filter(Boolean).join(``)).join(``)}</ul>`, { users: e2, destroy: () => {
      c2.abort(), o2.innerHTML = ``;
    } };
  });
};
var Fr = async ({ serverURL: e, lang: t, path: n }) => {
  let i2 = [1, 2, 3, 4, 5], a2 = new AbortController(), o2 = a2.abort.bind(a2), [s2] = await r({ serverURL: e, lang: t, paths: [n], type: Array.from({ length: 5 }, (e2, t2) => `reaction${t2}`), signal: a2.signal });
  return { value: i2.map((e2, t2) => s2[`reaction${t2}`]), abort: o2 };
};
var Ir = (e) => Number.isNaN(e) ? 0 : Math.min(5, Math.max(0, Math.round(e)));
var Lr = (e = []) => Array.from({ length: 5 }, (t, n) => {
  let r2 = e[n] ?? 0;
  return typeof r2 == `number` && r2 > 0 ? r2 : 0;
});
var Rr = { class: `wl-star-icon`, viewBox: `0 0 24 24` };
var zr = defineComponent({ __name: `WalineStarDisplay`, props: { score: { default: 0 } }, setup(e) {
  let t = computed(() => Ir(e.score)), n = (e2) => t.value >= e2 ? `wl-star-solid` : `wl-star-outline`;
  return (e2, t2) => (openBlock(), createElementBlock(Fragment, null, renderList([1, 2, 3, 4, 5], (e3) => createBaseVNode(`span`, { key: e3, class: `wl-star-item` }, [(openBlock(), createElementBlock(`svg`, Rr, [createBaseVNode(`path`, { class: normalizeClass(n(e3)), d: `M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z` }, null, 2)]))])), 64));
} });
var Br = { class: `wl-star` };
var Vr = { class: `wl-star-score` };
var Hr = { class: `wl-star-rate` };
var Ur = { class: `wl-star-progress` };
var Wr = [`data-count`];
var Gr = { class: `wl-star-percent` };
var Kr = defineComponent({ __name: `WalineStarWidget`, props: { serverURL: {}, lang: {}, path: {} }, emits: [`rate`], setup(e, { emit: t }) {
  let n = e, r2 = t, i2 = ref(null), a2 = bt(), o2 = ref(Ir((a2.value[n.path] ?? 0) + 1)), s2 = ref(null), c2 = ref(Lr([])), u = ref(false);
  onMounted(() => {
    watchImmediate(() => [n.serverURL, n.path], async () => {
      try {
        c2.value = Lr((await Fr(n)).value);
      } catch (e2) {
        console.error(`Failed to fetch reaction data:`, e2);
      }
    });
  });
  let d2 = computed(() => s2.value ?? o2.value), f2 = computed(() => c2.value.reduce((e2, t2) => e2 + t2, 0)), p2 = computed(() => c2.value.map((e2) => f2.value ? e2 / f2.value : 0)), m2 = (e2) => {
    if (!i2.value) return 0;
    let { firstElementChild: t2, lastElementChild: n2 } = i2.value;
    if (!t2 || !n2) return 0;
    let { left: r3 } = t2.getBoundingClientRect(), { right: a3 } = n2.getBoundingClientRect(), o3 = a3 - r3, s3 = (e2.clientX - r3) / o3;
    return Ir(Math.min(1, Math.max(0, s3)) * 5);
  }, h3 = (e2) => {
    s2.value = m2(e2);
  }, g = () => {
    s2.value = null;
  }, _ = async (e2) => {
    let t2 = s2.value ?? m2(e2);
    if (t2 === o2.value || u.value) return;
    u.value = true;
    let i3 = o2.value;
    try {
      i3 && (await i({ ...n, type: `reaction${i3 - 1}`, action: `desc` }), c2.value[i3 - 1] = Math.max(0, (c2.value[i3 - 1] ?? 0) - 1)), o2.value = t2;
      let e3 = t2 - 1;
      a2.value[n.path] = e3, await i({ ...n, type: `reaction${e3}`, action: `inc` }), c2.value[e3] = (c2.value[e3] ?? 0) + 1, r2(`rate`, t2);
    } catch (e3) {
      o2.value = i3, i3 ? a2.value[n.path] = i3 - 1 : delete a2.value[n.path], console.error(`[Waline] Failed to update reaction counter`, e3);
    } finally {
      u.value = false;
    }
  }, y = (e2) => c2.value[e2 - 1] ?? 0, b = (e2) => `${((p2.value[e2 - 1] ?? 0) * 100).toFixed(1)}%`;
  return (e2, t2) => (openBlock(), createElementBlock(`div`, Br, [createBaseVNode(`div`, { ref_key: `ratingArea`, ref: i2, class: `wl-star-rate`, onMousemove: h3, onMouseleave: g, onClick: _ }, [createVNode(zr, { score: d2.value }, null, 8, [`score`])], 544), createBaseVNode(`div`, Vr, [(openBlock(), createElementBlock(Fragment, null, renderList([5, 4, 3, 2, 1], (e3) => createBaseVNode(`div`, { key: e3, class: `wl-star-row` }, [createBaseVNode(`div`, Hr, [createVNode(zr, { score: e3 }, null, 8, [`score`])]), createBaseVNode(`div`, Ur, [createBaseVNode(`div`, { class: `wl-star-progress-bar`, style: normalizeStyle({ width: b(e3) }), "data-count": y(e3).toString() }, null, 12, Wr)]), createBaseVNode(`span`, Gr, toDisplayString(b(e3)), 1)])), 64))])]));
} });
var qr = ({ el: e, path: t, lang: n = navigator.language, serverURL: r2, onRate: i2 }) => {
  let a2 = tt(e);
  if (!a2) return { destroy: () => {
  } };
  let o2 = createApp(Kr, { path: t, lang: n, serverURL: r2, onRate: i2 });
  return o2.mount(a2), { destroy: () => {
    o2.unmount(), a2.innerHTML = ``;
  } };
};
export {
  Nr as RecentComments,
  qr as Star,
  Pr as UserList,
  o as addComment,
  mt as commentCount,
  Q as defaultLocales,
  s as deleteComment,
  l as fetchCommentCount,
  r as getArticleCounter,
  a as getComment,
  f as getPageview,
  m as getRecentComment,
  h2 as getUserList,
  Mr as init,
  d as login,
  jr as pageviewCount,
  i as updateArticleCounter,
  c as updateComment,
  p as updatePageview,
  Et as version
};
//# sourceMappingURL=@waline_client.js.map
