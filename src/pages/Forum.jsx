import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Heart, Reply, Send, 
  Cpu, Zap
} from 'lucide-react';
import { forumData, getPostById, getPostsByTag, getPostsByAuthor } from '../data/forumData';

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTags, setNewPostTags] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(5);

  // Carregar posts do arquivo de dados
  useEffect(() => {
    const savedPosts = localStorage.getItem('microwiki_forum_posts');
    if (savedPosts) {
      // Se tem posts salvos no localStorage, usa eles
      setPosts(JSON.parse(savedPosts));
      // Atualiza o próximo ID baseado nos posts salvos
      const maxId = Math.max(...JSON.parse(savedPosts).map(p => p.id), 4);
      setNextId(maxId + 1);
    } else {
      // Senão, carrega os dados iniciais do forumData
      setPosts(forumData.posts);
      setNextId(5);
    }
  }, []);

  // Salvar posts no localStorage sempre que mudar
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('microwiki_forum_posts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleNewPost = () => {
    if (!newPostContent.trim()) return;
    
    const tagsArray = newPostTags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    const newPost = {
      id: nextId,
      author: "Visitante MicroWiki",
      authorAvatar: "VM",
      authorRole: "Membro da Comunidade",
      date: new Date().toLocaleDateString('pt-BR'),
      content: newPostContent,
      likes: 0,
      tags: tagsArray,
      replies: []
    };
    
    setPosts([newPost, ...posts]);
    setNextId(nextId + 1);
    setNewPostContent('');
    setNewPostTags('');
    setShowNewPostForm(false);
  };

  const handleReply = (postId) => {
    if (!replyContent.trim()) return;
    
    const newReply = {
      id: Date.now(),
      author: "Visitante MicroWiki",
      authorAvatar: "VM",
      authorRole: "Membro da Comunidade",
      date: new Date().toLocaleDateString('pt-BR'),
      content: replyContent
    };
    
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, newReply] }
        : post
    ));
    
    setReplyingTo(null);
    setReplyContent('');
  };

  const handleNewPostKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNewPost();
    }
  };

  const handleReplyKeyDown = (e, postId) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleReply(postId);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  const totalReplies = posts.reduce((sum, post) => sum + post.replies.length, 0);

  return (
    <div className="bg-stone-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Barra de busca e botão */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="🔍 Buscar por assunto, tag ou autor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Nova Discussão
          </button>
        </div>

        {/* Formulário Nova Discussão */}
        <AnimatePresence>
          {showNewPostForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-5">
                <h3 className="font-bold text-lg text-stone-800 mb-3">Iniciar Discussão</h3>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  onKeyDown={handleNewPostKeyDown}
                  placeholder="Compartilhe sua dúvida, experiência ou conhecimento..."
                  className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-30"
                  autoFocus
                />
                <div className="mt-3">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Tags (separadas por vírgula)</label>
                  <input
                    type="text"
                    value={newPostTags}
                    onChange={(e) => setNewPostTags(e.target.value)}
                    placeholder="Ex: ESP32, Sensor, MicroPython"
                    className="w-full p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleNewPost}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition-colors text-sm"
                  >
                    Publicar
                  </button>
                  <button
                    onClick={() => setShowNewPostForm(false)}
                    className="border border-stone-300 hover:bg-stone-50 px-5 py-2 rounded-lg transition-colors text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Estatísticas */}
        <div className="bg-blue-50 rounded-lg p-3 mb-5 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-800">{posts.length} discussões</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-800">Comunidade ativa</span>
          </div>
        </div>

        {/* Lista de Posts */}
        <div className="space-y-5">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                {/* Cabeçalho do Post */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-700 font-medium text-xs">
                      {post.authorAvatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-stone-800 text-sm">{post.author}</span>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {post.authorRole}
                      </span>
                      <span className="text-xs text-stone-400">{post.date}</span>
                    </div>
                    <p className="text-stone-700 mt-2 leading-relaxed text-sm">{post.content}</p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors"
                          onClick={() => setSearchTerm(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex items-center gap-5 ml-12">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 text-stone-500 hover:text-red-500 transition-colors group"
                  >
                    <Heart className="w-4 h-4 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === post.id ? null : post.id)}
                    className="flex items-center gap-1 text-stone-500 hover:text-blue-700 transition-colors"
                  >
                    <Reply className="w-4 h-4" />
                    <span className="text-xs">Responder ({post.replies.length})</span>
                  </button>
                </div>

                {/* Respostas */}
                <AnimatePresence>
                  {post.replies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-12 mt-3 space-y-2 border-l-2 border-stone-100 pl-3"
                    >
                      {post.replies.map((reply) => (
                        <div key={reply.id} className="pt-2">
                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                              <span className="text-stone-600 text-[10px] font-medium">
                                {reply.authorAvatar}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-xs text-stone-800">
                                  {reply.author}
                                </span>
                                <span className="text-[10px] text-stone-400">{reply.date}</span>
                              </div>
                              <p className="text-stone-600 text-xs mt-1">{reply.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Formulário de Resposta */}
                <AnimatePresence>
                  {replyingTo === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-12 mt-3"
                    >
                      <div className="flex gap-2">
                        <textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          onKeyDown={(e) => handleReplyKeyDown(e, post.id)}
                          placeholder="Escreva sua resposta... (Enter para enviar)"
                          className="flex-1 p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          rows="2"
                          autoFocus
                        />
                        <button
                          onClick={() => handleReply(post.id)}
                          className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-lg transition-colors self-end"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl">
              <Cpu className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="text-stone-500">Nenhuma discussão encontrada.</p>
              <button
                onClick={() => setShowNewPostForm(true)}
                className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Iniciar primeira discussão →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}