export default function Problem() {
  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Information shouldn't be this hard to find
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          LASU students lose real time to information scattered across WhatsApp
          groups, notice boards, and departmental offices — with no single
          reliable source for procedures, deadlines, or letter formats.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div>
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-xs text-gray-500">AI-grounded features</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">4 hrs</div>
            <div className="text-xs text-gray-500">build sprint</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">Gemma 4</div>
            <div className="text-xs text-gray-500">reasoning engine</div>
          </div>
        </div>
      </div>
    </section>
  );
}
